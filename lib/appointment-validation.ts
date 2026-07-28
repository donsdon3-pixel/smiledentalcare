export type AppointmentValidationValues = {
  name: string;
  phone: string;
  email: string;
  appointment_date: string;
  appointment_time: string;
  service: string;
  message: string;
};

export type AppointmentValidationErrors = Partial<
  Record<keyof AppointmentValidationValues, string>
>;

export function validateAppointmentValues(
  values: AppointmentValidationValues,
): AppointmentValidationErrors {
  const errors: AppointmentValidationErrors = {};

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

  if (!values.service) {
    errors.service = "Choose a service.";
  }

  if (values.message.length > 1000) {
    errors.message = "Keep your message under 1000 characters.";
  }

  return errors;
}
