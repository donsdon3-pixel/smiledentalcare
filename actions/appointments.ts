"use server";

export type AppointmentFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

export async function bookAppointment(
  prevState: AppointmentFormState,
  formData: FormData
): Promise<AppointmentFormState> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const appointmentDate = formData.get("appointment_date") as string;
    const appointmentTime = formData.get("appointment_time") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    // Validate required fields
    const errors: Record<string, string> = {};

    if (!name || name.trim().length < 2) {
      errors.name = "Enter your full name.";
    }

    if (!/^[+(\)\-\s\d]{7,20}$/.test(phone)) {
      errors.phone = "Enter a valid phone number.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!appointmentDate) {
      errors.appointment_date = "Choose a preferred date.";
    }

    if (!appointmentTime) {
      errors.appointment_time = "Choose a preferred time.";
    }

    if (!service) {
      errors.service = "Choose a service.";
    }

    if (Object.keys(errors).length > 0) {
      return {
        status: "error",
        message: "Please fix the errors above.",
        fieldErrors: errors,
      };
    }

    // TODO: Integrate with Supabase to save appointment
    // Example code (uncomment when Supabase is configured):
    // const supabase = createClient();
    // const { data, error } = await supabase
    //   .from("appointments")
    //   .insert([
    //     {
    //       name,
    //       email,
    //       phone,
    //       appointment_date: appointmentDate,
    //       appointment_time: appointmentTime,
    //       service,
    //       message,
    //       created_at: new Date().toISOString(),
    //     },
    //   ]);
    // if (error) throw error;

    // For now, just log the submission
    console.log("Appointment submitted:", {
      name,
      email,
      phone,
      appointmentDate,
      appointmentTime,
      service,
      message,
    });

    return {
      status: "success",
      message: "Thank you! We received your appointment request. Our team will contact you shortly to confirm.",
      fieldErrors: {},
    };
  } catch (error) {
    console.error("Appointment booking error:", error);
    return {
      status: "error",
      message: "Something went wrong. Please try again later.",
      fieldErrors: {},
    };
  }
}
