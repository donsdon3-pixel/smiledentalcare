-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  service VARCHAR(255) NOT NULL,
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create index on appointment date for faster queries
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(appointment_date);

-- Create index on email for finding patient appointments
CREATE INDEX IF NOT EXISTS idx_appointments_email ON appointments(email);

-- Create index on status for filtering appointments
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
