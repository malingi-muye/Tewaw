-- Create admin users table for dashboard access
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);

-- Insert initial admin user (you'll need to add this email to Supabase Auth)
INSERT INTO admin_users (email, full_name, role) VALUES
('tewawenterprises@gmail.com', 'Tewaw Admin', 'super_admin');

-- Create RLS policies for security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Allow public read access to products
CREATE POLICY "Public can view products" ON products
  FOR SELECT USING (true);

-- Allow authenticated admins to manage products
CREATE POLICY "Admins can manage products" ON products
  FOR ALL USING (
    auth.uid() IN (SELECT id FROM admin_users WHERE email = auth.jwt() ->> 'email')
  );

-- Allow public to create quotes
CREATE POLICY "Anyone can create quotes" ON quotes
  FOR INSERT WITH CHECK (true);

-- Allow authenticated admins to view and manage quotes
CREATE POLICY "Admins can view quotes" ON quotes
  FOR SELECT USING (
    auth.uid() IN (SELECT id FROM admin_users WHERE email = auth.jwt() ->> 'email')
  );

CREATE POLICY "Admins can update quotes" ON quotes
  FOR UPDATE USING (
    auth.uid() IN (SELECT id FROM admin_users WHERE email = auth.jwt() ->> 'email')
  );

-- Only admins can view admin_users table
CREATE POLICY "Admins can view admin users" ON admin_users
  FOR SELECT USING (
    auth.uid() IN (SELECT id FROM admin_users WHERE email = auth.jwt() ->> 'email')
  );
