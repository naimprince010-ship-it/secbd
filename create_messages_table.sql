-- Run this SQL in your Supabase SQL Editor to create the contact_messages table
-- This will store messages sent from your Frontend Contact Form

CREATE TABLE IF NOT EXISTS contact_messages (
    id SERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    service_type TEXT,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public INSERT (Anyone can submit a message)
DROP POLICY IF EXISTS "Allow public insert" ON contact_messages;
CREATE POLICY "Allow public insert" ON contact_messages 
    FOR INSERT WITH CHECK (true);

-- Allow public SELECT (For Admin to read)
-- Note: In production, change this to authenticated-only or restrict via auth.role()
DROP POLICY IF EXISTS "Allow public read access" ON contact_messages;
CREATE POLICY "Allow public read access" ON contact_messages 
    FOR SELECT USING (true);
