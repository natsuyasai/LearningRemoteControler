\c remotecontroler;

SET search_path to "data";

-- Create a sample table
CREATE TABLE IF NOT EXISTS testdata (
    id SERIAL PRIMARY KEY,
    data VARCHAR(255)
);

-- Insert some sample data
INSERT INTO testdata (data) VALUES
('abcdef'),
('hijklmn');
