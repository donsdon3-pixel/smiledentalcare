"use server";

import { insertAppointment } from "@/lib/supabase";
import {
  validateAppointmentValues,
  type AppointmentValidationValues,
} from "@/lib/appointment-validation";
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

function sanitizeServiceValue(value: string) {
  return serviceNames.has(value) ? value : "";
}

export async function bookAppointment(
  _previousState: AppointmentFormState,
  formData: FormData,
): Promise<AppointmentFormState> {
  const values: AppointmentValidationValues = {
    name: readFormValue(formData, "name"),
    phone: readFormValue(formData, "phone"),
    email: readFormValue(formData, "email"),
    appointment_date: readFormValue(formData, "appointment_date"),
    appointment_time: readFormValue(formData, "appointment_time"),
    service: sanitizeServiceValue(readFormValue(formData, "service")),
    message: readFormValue(formData, "message"),
  };

  const fieldErrors = validateAppointmentValues(values);

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

