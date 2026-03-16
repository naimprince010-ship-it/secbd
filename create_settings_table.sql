-- Run this SQL in your Supabase SQL Editor to create the site_settings table
-- This will store your Contact Info and Website Address

CREATE TABLE IF NOT EXISTS site_settings (
    id INT PRIMARY KEY DEFAULT 1 CHECK (id = 1), -- Forces a single row for settings
    address TEXT,
    hours TEXT,
    phone TEXT,
    email TEXT,
    website TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert initial values matching your current mockData.ts
INSERT INTO site_settings (id, address, hours, phone, email, website)
VALUES (
    1, 
    '123 Construction Ave, Skyline City, SC 54321', 
    'Mon - Fri: 8:00 AM - 6:00 PM', 
    '(555) 123-4567', 
    'contact@secbuild.com', 
    'www.secbuild.com'
)
ON CONFLICT (id) DO NOTHING;

-- Enable public read access (Frontend reading data)
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Drop existing if any to avoid errors
DROP POLICY IF EXISTS "Allow public read access" ON site_settings;
DROP POLICY IF EXISTS "Allow authenticated update" ON site_settings;

CREATE POLICY "Allow public read access" ON site_settings
    FOR SELECT USING (true);

-- Enable authenticated update access (Admin Panel writing data)
CREATE POLICY "Allow authenticated update" ON site_settings
    FOR UPDATE USING (true); -- Note: Adjust with auth check if you have Auth set up later. For now, allowed.
    
CREATE POLICY "Allow authenticated insert" ON site_settings
    FOR INSERT WITH CHECK (true);
