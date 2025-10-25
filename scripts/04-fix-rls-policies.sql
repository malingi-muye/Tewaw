-- Drop existing problematic policies
DROP POLICY IF EXISTS "Admins can manage products" ON products;
DROP POLICY IF EXISTS "Admins can view quotes" ON quotes;
DROP POLICY IF EXISTS "Admins can update quotes" ON quotes;
DROP POLICY IF EXISTS "Admins can view admin users" ON admin_users;

-- Fix products policies - separate read from write operations
-- Public read access already exists, now add admin write access without recursion
CREATE POLICY "Admins can insert products" ON products
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

CREATE POLICY "Admins can update products" ON products
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

CREATE POLICY "Admins can delete products" ON products
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Fix quotes policies - use EXISTS instead of IN to avoid recursion
CREATE POLICY "Admins can view quotes" ON quotes
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

CREATE POLICY "Admins can update quotes" ON quotes
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = auth.jwt() ->> 'email'
    )
  );

-- Fix admin_users policy - check email directly without self-reference
CREATE POLICY "Admins can view admin users" ON admin_users
  FOR SELECT USING (
    email = auth.jwt() ->> 'email'
  );

-- Allow admins to insert new admin users
CREATE POLICY "Admins can insert admin users" ON admin_users
  FOR INSERT WITH CHECK (
    email = auth.jwt() ->> 'email'
  );
