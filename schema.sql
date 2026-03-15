-- Run this SQL in your Supabase SQL Editor to create the certificates table

CREATE TABLE certificates (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    passport_no VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'Active',
    ref_no VARCHAR(255) UNIQUE NOT NULL,
    created_by VARCHAR(255) DEFAULT 'Admin Panel',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster lookup
CREATE INDEX idx_certificates_ref_no ON certificates(ref_no);

-- Insert Mock Data for testing
INSERT INTO certificates (name, passport_no, position, start_date, end_date, status, ref_no)
VALUES 
('SOHAG SARDER', 'A21043816', 'Bricklayer', '2023-02-01', '2026-02-02', 'Active', 'SEC/2026/CONST/084');
