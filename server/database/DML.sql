-- Inserting data into instructors table
INSERT INTO instructors (name, email, phone_number, linkedin_profile) VALUES 
('John Doe', 'johndoe@gmail.com', '1234567890', 'https://www.linkedin.com/in/johndoe'),
('Jane Smith', 'janesmith@gmail.com', '0987654321', 'https://www.linkedin.com/in/janesmith'),
('Robert Johnson', 'robertjohnson@gmail.com', '1122334455', 'https://www.linkedin.com/in/robertjohnson'),
('Emily Davis', 'emilydavis@gmail.com', '2233445566', 'https://www.linkedin.com/in/emilydavis'),
('Michael Miller', 'michaelmiller@gmail.com', '3344556677', 'https://www.linkedin.com/in/michaelmiller');

SELECT * FROM instructors;

-- Inserting data into learners table
INSERT INTO learners (name, email, phone_number, linkedin_profile) VALUES 
('Alice Johnson', 'alicejohnson@gmail.com', '9879543210', 'https://www.linkedin.com/in/alicejohnson'),
('Bob Williams', 'bobwilliams@gmail.com', '8765432109', 'https://www.linkedin.com/in/bobwilliams'),
('Charlie Brown', 'charliebrown@gmail.com', '7654321098', 'https://www.linkedin.com/in/charliebrown'),
('David Jones', 'davidjones@gmail.com', '6543210987', 'https://www.linkedin.com/in/davidjones'),
('Eva Davis', 'evadavis@gmail.com', '5432109876', 'https://www.linkedin.com/in/evadavis'),
('Frank Miller', 'frankmiller@gmail.com', '4321098765', 'https://www.linkedin.com/in/frankmiller'),
('Grace Wilson', 'gracewilson@gmail.com', '3210987654', 'https://www.linkedin.com/in/gracewilson'),
('Harry Moore', 'harrymoore@gmail.com', '2109876543', 'https://www.linkedin.com/in/harrymoore'),
('Ivy Taylor', 'ivytaylor@gmail.com', '1098765432', 'https://www.linkedin.com/in/ivytaylor'),
('Jack Anderson', 'jackanderson@gmail.com', '0987654321', 'https://www.linkedin.com/in/jackanderson'),
('Katie Thomas', 'katiethomas@gmail.com', '9876543210', 'https://www.linkedin.com/in/katiethomas'),
('Leo Jackson', 'leojackson@gmail.com', '8795432109', 'https://www.linkedin.com/in/leojackson'),
('Mia White', 'miawhite@gmail.com', '7654721098', 'https://www.linkedin.com/in/miawhite'),
('Noah Harris', 'noahharris@gmail.com', '6546210987', 'https://www.linkedin.com/in/noahharris'),
('Olivia Martin', 'oliviamartin@gmail.com', '5432199876', 'https://www.linkedin.com/in/oliviamartin');

SELECT * FROM learners;

-- Inserting data into courses table
INSERT INTO courses (name, max_seats, start_date, instructor_id) VALUES 
('Data Science 101', 30, '2024-04-01', 20),
('Web Development Bootcamp', 25, '2024-05-01', 21),
('Machine Learning Basics', 20, '2024-06-01', 22),
('Advanced Python Programming', 15, '2024-07-01', 23),
('Digital Marketing Essentials', 10, '2024-08-01', 24),
('Introduction to Cloud Computing', 30, '2024-09-01', 20),
('Cybersecurity Fundamentals', 25, '2024-10-01', 21),
('Artificial Intelligence Concepts', 20, '2024-11-01', 22),
('Database Design Principles', 15, '2024-12-01', 23),
('Software Engineering Practices', 10, '2025-01-01', 24);

SELECT * FROM courses;

-- Inserting data into course_applications table
INSERT INTO leads (course_id, learner_id, status) VALUES 
(21, 39, 'Accept'),
(21, 40, 'Reject'),
(22, 41, 'Waitlist'),
(22, 42, 'Accept'),
(23, 43, 'Reject'),
(23, 44, 'Waitlist'),
(24, 45, 'Accept'),
(24, 46, 'Reject'),
(25, 47, 'Waitlist'),
(25, 48, 'Accept'),
(26, 49, 'Reject'),
(26, 50, 'Waitlist'),
(27, 51, 'Accept'),
(27, 52, 'Reject'),
(28, 53, 'Waitlist'),
(28, 39, 'Accept'),
(29, 40, 'Reject'),
(29, 41, 'Waitlist'),
(30, 42, 'Accept'),
(30, 43, 'Reject');

SELECT * FROM leads;

-- Inserting data into comments table
INSERT INTO comments (lead_id, comment_text) VALUES 
(1, 'Great potential. Looking forward to working with this learner.'),
(2, 'Needs to improve on some technical skills.'),
(3, 'Impressive background in the field.'),
(4, 'Application under review.'),
(5, 'Excellent communication skills.'),
(6, 'Good understanding of the course material.'),
(7, 'Has relevant experience.'),
(8, 'Could benefit from additional coursework before starting.'),
(9, 'Strong academic record.'),
(10, 'Has shown great initiative.'),
(11, 'Would be a great fit for the course.'),
(12, 'Lacks some prerequisites for the course.'),
(13, 'Very enthusiastic about the course topics.'),
(14, 'Has already completed some advanced coursework.'),
(15, 'Would benefit from some additional preparation.'),
(16, 'Very motivated to succeed.'),
(17, 'Has a strong foundation in the necessary skills.'),
(18, 'Could use some more experience in the field.'),
(19, 'Very passionate about the subject matter.'),
(20, 'Has a lot of potential for growth.');

SELECT * FROM comments;