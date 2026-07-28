import assert from "node:assert/strict";
import test from "node:test";

import { validateAppointmentValues } from "../lib/appointment-validation";

test("flags invalid email and missing service", () => {
  const errors = validateAppointmentValues({
    name: "Ada Lovelace",
    phone: "+15551234567",
    email: "not-an-email",
    appointment_date: "2026-07-26",
    appointment_time: "10:30",
    service: "",
    message: "",
  });

  assert.equal(errors.email, "Enter a valid email address.");
  assert.equal(errors.service, "Choose a service.");
});

test("accepts valid values", () => {
  const errors = validateAppointmentValues({
    name: "Ada Lovelace",
    phone: "+15551234567",
    email: "ada@example.com",
    appointment_date: "2026-07-27",
    appointment_time: "10:30",
    service: "Cosmetic Dentistry",
    message: "Routine cleaning",
  });

  assert.deepEqual(errors, {});
});
