export type AppointmentInsert = {
  name: string;
  phone: string;
  email: string;
  service: string;
  appointment_date: string;
  appointment_time: string;
  message: string | null;
};

type SupabaseInsertResult =
  | {
      ok: true;
    }
  | {
      ok: false;
      error: string;
    };

const supabaseUrl =
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function insertAppointment(
  appointment: AppointmentInsert
): Promise<SupabaseInsertResult> {
  if (!supabaseUrl || !supabaseServiceKey) {
    return {
      ok: false,
      error:
        "Supabase is not configured. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to your environment.",
    };
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/appointments`, {
      method: "POST",
      headers: {
        apikey: supabaseServiceKey,
        Authorization: `Bearer ${supabaseServiceKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(appointment),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();

      return {
        ok: false,
        error: errorText || "Unable to save appointment request.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Unable to reach Supabase. Please try again shortly.",
    };
  }
}
