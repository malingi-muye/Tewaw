-- Create quotes table for managing customer quote requests
CREATE TABLE IF NOT EXISTS quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  product_type VARCHAR(100) NOT NULL,
  quantity INTEGER NOT NULL,
  customization TEXT,
  timeline VARCHAR(100),
  budget_range VARCHAR(100),
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_quotes_status ON quotes(status);
CREATE INDEX IF NOT EXISTS idx_quotes_created_at ON quotes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quotes_email ON quotes(email);

-- Create status enum values: pending, reviewed, quoted, accepted, rejected, completed
COMMENT ON COLUMN quotes.status IS 'Status values: pending, reviewed, quoted, accepted, rejected, completed';
