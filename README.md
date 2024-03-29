# Airtribe Course Management System

This project is a backend system for managing application-based courses on Airtribe. 
It’s built using Node.js and PostgreSQL and includes a suite of APIs for creating and 
updating courses, registering learners for courses, and managing leads and comments.

## Technologies Used
- Node.js
- Express
- PostgreSQL
- Docker

## Database Schema

ER Diagram is available in `database` directory.

The database includes the following tables:

- `instructors`: Contains details of the instructors on Airtribe.
- `courses`: Contains details of the courses available on Airtribe.
- `learners`: Contains details of the learners on Airtribe.
- `leads`: Contains details of the leads.
- `comments`: Contains comments made by instructors for each lead.

## APIs

For better experience of APIs, go to Postman API documentation

**API Documentation**: https://documenter.getpostman.com/view/32352885/2sA2xh2swi

The server exposes several APIs:

- `GET /courses`: Fetches a list of all courses.
- `POST /courses`: Creates a new course.
- `PUT /courses/:courseId`: Updates the details of a specific course.
- `POST /courses/:courseId/learners`: Registers a learner for a specific course.
- `PATCH /learners/:learnerId`: Updates the status of a specific lead.
- `GET /learners`: Searches for leads by name or email.
- `POST /learners/:learnerId/comments`: Adds a comment to a specific lead.

## Setup and Installation

The server and database are dockerized for easy setup and deployment. 

Follow these steps to set up the environment:

1. Start your `Docker Desktop` in the background first.

2. **Build the Docker image**: Run the following command to build the Docker image for your Node.js app:

    ```
    docker build -t my-node-app .
    ```

3. **Start the Docker containers**: Use Docker Compose to start your app and database in separate containers:

    ```
    docker-compose up
    ```

4. **Access pgAdmin**: Open your web browser and navigate to `http://localhost:5050` to access pgAdmin 4. Use the following credentials to log in:

    - Username: `admin@admin.com`
    - Password: `admin`

## Testing

You can test the APIs using the provided sample data. This data can be found in the `DDL.sql` and `DML.sql` files in the `database` directory.

## Database Setup (Optional)

This step is only required when server is running on `localhost`.

Before running the server, you need to set up your database tables and load the test data:

1. **Create the tables**: Run the `DDL.sql` script to create the necessary tables in your database. This script contains all the `CREATE TABLE` commands.

2. **Load the test data**: Run the `DML.sql` script to load the sample data into your tables. This script contains `INSERT` statements for each table.

## Acknowledgments

A special thanks to my friend who helped me understand the concepts of Docker. 

You can check out his work on GitHub here: https://github.com/shivanshu877