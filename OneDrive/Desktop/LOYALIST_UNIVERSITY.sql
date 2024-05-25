-- Checking for unique student IDs
SELECT StudentID, COUNT(*) AS NumOccurrences
FROM Students
GROUP BY StudentID
HAVING COUNT(*) > 1;

-- Checking for students with updated addresses
SELECT StudentID, Address
FROM Students
WHERE Address <> 'Initial_Address';

-- Checking for students with updated phone numbers
SELECT StudentID, Phone
FROM Students
WHERE Phone <> 'Initial_Phone';

-- Checking for students with updated email addresses
SELECT StudentID, Email
FROM Students
WHERE Email <> 'Initial_Email';
