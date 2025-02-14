# Student Management System

## Overview
The Student Management System is a web application that allows users to manage a list of students. Users can view, add, edit, and delete student records through a user-friendly interface.

## Project Structure
```
student-management-system
├── css
│   └── styles.css       # Custom styles for the project
├── js
│   └── scripts.js       # JavaScript functionality for the application
├── index.html           # Main HTML page for the Student Management System
└── README.md            # Documentation for the project
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser to view the application.

## Usage
- The main page displays a table of students with options to edit or delete each student.
- Click the "Edit" button next to a student to open the edit form pre-filled with the student's data.
- Click the "New" button to open a blank form to add a new student.
- The "Delete" button will remove the student from the list.

## API Endpoints
The application interacts with the following API endpoints:
- **Get all students**: `http://54.234.135.255:8080/students?page=0`
- **Get a specific student**: `http://54.234.135.255:8080/students?id={id}`
- **Delete a student**: `http://54.234.135.255:8080/students`

## Requirements
- Ensure you have an active internet connection to access the backend API.
- The application requires the `X-Api-Key` for all requests.

## Technologies Used
- HTML
- CSS (Bootstrap for styling)
- JavaScript (Vanilla JS for functionality)

## License
This project is licensed under the MIT License.