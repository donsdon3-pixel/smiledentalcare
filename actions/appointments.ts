"use server";

import { insertAppointment } from "@/lib/supabase";
import { servicePageItems } from "@/data/services";

export type AppointmentFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<AppointmentField, string>>;
};

type AppointmentField =
  | "appointment_date"
  | "appointment_time"
  | "email"
  | "message"
  | "name"
  | "phone"
  | "service";

const serviceNames = new Set(servicePageItems.map((service) => service.title));

export async function bookAppointment(
  _previousState: AppointmentFormState,
  formData: FormData,
): Promise<AppointmentFormState> {
  const values = {
    name: readFormValue(formData, "name"),
    phone: readFormValue(formData, "phone"),
    email: readFormValue(formData, "email"),
    appointment_date: readFormValue(formData, "appointment_date"),
    appointment_time: readFormValue(formData, "appointment_time"),
    service: readFormValue(formData, "service"),
    message: readFormValue(formData, "message"),
  };

  const fieldErrors = validateAppointment(values);

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  const result = await insertAppointment({
    ...values,
    message: values.message || null,
  });

  if (!result.ok) {
    return {
      status: "error",
      message: result.error,
    };
  }

  return {
    status: "success",
    message:
      "Your appointment request has been sent. Our team will contact you soon to confirm availability.",
  };
}

function readFormValue(formData: FormData, key: AppointmentField) {
  return String(formData.get(key) ?? "").trim();
}

function validateAppointment(values: Record<AppointmentField, string>) {
  const errors: Partial<Record<AppointmentField, string>> = {};

  if (values.name.length < 2) {
    errors.name = "Enter your full name.";
  }

  if (!/^[+()\-\s\d]{7,20}$/.test(values.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.appointment_date) {
    errors.appointment_date = "Choose a preferred date.";
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const requestedDate = new Date(`${values.appointment_date}T00:00:00`);

    if (requestedDate < today) {
      errors.appointment_date = "Choose today or a future date.";
    }
  }

  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(values.appointment_time)) {
    errors.appointment_time = "Choose a preferred time.";
  }

  if (!serviceNames.has(values.service)) {
    errors.service = "Choose a service.";
  }

  if (values.message.length > 1000) {
    errors.message = "Keep your message under 1000 characters.";
  }

  return errors;
}
