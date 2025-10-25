-- Create products table for managing product catalog
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category VARCHAR(100) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  features TEXT[],
  price_range VARCHAR(100),
  image_url TEXT,
  slug VARCHAR(255) UNIQUE NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured);

-- Insert initial product categories
INSERT INTO products (category, name, description, features, slug, is_featured, display_order) VALUES
('Hoodies & Jumpers', 'Premium Cotton Hoodies', 'Soft, warm, and perfect for branding. Our hoodies are made from premium cotton fleece for ultimate comfort.', ARRAY['100% Cotton Fleece', 'Custom Embroidery Available', 'Multiple Color Options', 'Sizes: S to 3XL'], 'hoodies-jumpers', true, 1),
('T-Shirts', 'Classic Cotton T-Shirts', 'Breathable cotton and blended fabrics. Perfect for corporate branding, events, and everyday wear.', ARRAY['Breathable Cotton', 'Screen Printing Ready', 'Durable Stitching', 'Custom Designs Welcome'], 'tshirts', true, 2),
('Sweatpants & Sweatshirts', 'Comfort Wear Collection', 'Premium comfort wear for casual and athletic use. Perfect for teams and corporate wellness programs.', ARRAY['Soft Fleece Interior', 'Elastic Waistband', 'Matching Sets Available', 'Bulk Order Discounts'], 'sweatpants-sweatshirts', false, 3),
('Tracksuits', 'Athletic Tracksuits', 'Complete tracksuit sets for sports teams, schools, and fitness enthusiasts.', ARRAY['Matching Top & Bottom', 'Moisture-Wicking Fabric', 'Team Branding Options', 'Durable Construction'], 'tracksuits', false, 4),
('Jackets', 'Stylish Outerwear', 'Durable and stylish jackets for all occasions. From corporate to casual, we have you covered.', ARRAY['Weather Resistant', 'Multiple Pocket Options', 'Custom Logo Placement', 'Variety of Styles'], 'jackets', true, 5),
('Polo Shirts', 'Professional Polo Shirts', 'Professional yet relaxed options for corporate uniforms and events.', ARRAY['Collar Design', 'Breathable Fabric', 'Easy Care Material', 'Perfect for Uniforms'], 'polo-shirts', false, 6),
('Maasai Shukas & Kikoys', 'Traditional Kenyan Fabrics', 'Authentic Kenyan heritage products. Available in fleece-lined or plain cotton versions.', ARRAY['Authentic Kenyan Design', 'Fleece-Lined Options', 'Vibrant Colors', 'Cultural Heritage'], 'maasai-shukas-kikoys', true, 7),
('Ponchos & Snoodies', 'Warm Accessories', 'Elegant warmth for cold weather. Perfect for outdoor events and promotional items.', ARRAY['Cozy Fleece Material', 'One Size Fits Most', 'Custom Patterns Available', 'Lightweight & Warm'], 'ponchos-snoodies', false, 8),
('Uniforms & Workwear', 'Professional Workwear', 'Complete uniform solutions including overalls, dust coats, reflectors, tactical uniforms, and aprons.', ARRAY['Durable Materials', 'Safety Compliant', 'Custom Branding', 'Bulk Pricing Available'], 'uniforms-workwear', false, 9),
('Accessories', 'Bags, Caps & More', 'Complete your brand with our accessories including gift bags, jute bags, caps, and umbrellas.', ARRAY['Eco-Friendly Options', 'Custom Printing', 'Variety of Styles', 'Perfect for Promotions'], 'accessories', false, 10);
