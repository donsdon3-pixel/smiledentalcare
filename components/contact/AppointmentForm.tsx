"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { FaCalendarCheck } from "react-icons/fa6";

import {
  bookAppointment,
  type AppointmentFormState,
} from "@/actions/appointments";
import { Button } from "@/components/ui/Button";
import { servicePageItems } from "@/data/services";
import { validateAppointmentValues } from "@/lib/appointment-validation";
import { cn } from "@/utils/cn";

const initialState: AppointmentFormState = {
  status: "idle",
  message: "",
};

type ClientErrors = Partial<Record<string, string>>;

export function AppointmentForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    bookAppointment,
    initialState,
  );
  const [clientErrors, setClientErrors] = useState<ClientErrors>({});

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      setClientErrors({});
    }
  }, [state.status]);

  const fieldErrors = {
    ...clientErrors,
    ...state.fieldErrors,
  };

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="grid gap-5"
      aria-label="Appointment booking form"
      onSubmit={(event) => {
        const errors = validateClientForm(event.currentTarget);

        setClientErrors(errors);

        if (Object.keys(errors).length > 0 || isPending) {
          event.preventDefault();
        }
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="name"
          label="Full Name"
          autoComplete="name"
          error={fieldErrors.name}
        />
        <FormField
          id="phone"
          label="Phone Number"
          type="tel"
          autoComplete="tel"
          error={fieldErrors.phone}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="email"
          label="Email Address"
          type="email"
          autoComplete="email"
          error={fieldErrors.email}
        />
        <FormField
          id="appointment_date"
          label="Preferred Date"
          type="date"
          error={fieldErrors.appointment_date}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="appointment_time"
          label="Preferred Time"
          type="time"
          error={fieldErrors.appointment_time}
        />
        <div>
          <label
            htmlFor="service"
            className="text-sm font-semibold text-clinic-blue-900"
          >
            Select Service
          </label>
          <select
            id="service"
            name="service"
            required
            aria-invalid={Boolean(fieldErrors.service)}
            aria-describedby={fieldErrors.service ? "service-error" : undefined}
            className={cn(
              "mt-2 h-12 w-full rounded-md border bg-white px-3 text-sm text-clinic-gray-800 transition",
              "focus:border-clinic-blue-500 focus:outline-none focus:ring-2 focus:ring-clinic-blue-500/20",
              fieldErrors.service
                ? "border-red-500"
                : "border-clinic-gray-200",
            )}
            defaultValue=""
          >
            <option value="" disabled>
              Choose a service
            </option>
            {servicePageItems.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          <FieldError id="service-error" message={fieldErrors.service} />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-sm font-semibold text-clinic-blue-900"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1000}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={cn(
            "mt-2 w-full rounded-md border bg-white px-3 py-3 text-sm text-clinic-gray-800",
            fieldErrors.message ? "border-red-500" : "border-clinic-gray-200",
          )}
          placeholder="Tell us what brings you in."
        />
        <FieldError id="message-error" message={fieldErrors.message} />
      </div>

      <div aria-live="polite">
        {state.message ? (
          <p
            className={cn(
              "rounded-md px-4 py-3 text-sm font-medium",
              state.status === "success"
                ? "bg-clinic-blue-50 text-clinic-blue-900"
                : "bg-red-50 text-red-700",
            )}
          >
            {state.message}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-fit"
        disabled={isPending}
      >
        <FaCalendarCheck aria-hidden="true" />
        {isPending ? "Sending..." : "Request Appointment"}
      </Button>
    </form>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  error?: string;
};

function FormField({
  autoComplete,
  error,
  id,
  label,
  type = "text",
}: FormFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-clinic-blue-900">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "mt-2 h-12 w-full rounded-md border bg-white px-3 text-sm text-clinic-gray-800 transition",
          "focus:border-clinic-blue-500 focus:outline-none focus:ring-2 focus:ring-clinic-blue-500/20",
          error ? "border-red-500" : "border-clinic-gray-200",
        )}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="mt-2 text-sm font-medium text-red-700">
      {message}
    </p>
  );
}

function validateClientForm(form: HTMLFormElement) {
  const formData = new FormData(form);

  const values = {
    name: String(formData.get("name") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    appointment_date: String(formData.get("appointment_date") ?? "").trim(),
    appointment_time: String(formData.get("appointment_time") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  return validateAppointmentValues(values);
}
