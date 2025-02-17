document.addEventListener('DOMContentLoaded', function() {
    // const apiUrl = 'http://54.234.135.255:8081/students';
    const apiUrl = 'http://localhost:8080/students';
    const apiKey = 'mySecretKey';
    const studentTableBody = document.getElementById('studentTableBody');

    function fetchStudents(page = 0) {
        fetch(`${apiUrl}?page=${page}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            displayStudents(data);
        })
        .catch(error => console.error('Error fetching students:', error));
    }

    function displayStudents(students) {
        studentTableBody.innerHTML = '';
        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.age}</td>
                <td>${student.major}</td>
                <td>
                    <button class="btn btn-primary" onclick="editStudent(${student.id})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteStudent(${student.id})">Delete</button>
                </td>
            `;
            studentTableBody.appendChild(row);
        });
    }

    window.editStudent = function(id) {
        window.location.href = `edit.html?id=${id}`;
    };

    window.deleteStudent = function(id) {
        fetch(`${apiUrl}?id=${id}`, {
            method: 'DELETE',
            headers: {
                'X-Api-Key': apiKey
            }
        })
        .then(response => {
            if (response.ok) {
                fetchStudents(); // Refresh the student list
            } else {
                console.error('Error deleting student:', response.statusText);
            }
        })
        .catch(error => console.error('Error deleting student:', error));
    };

    document.getElementById('newStudentButton').addEventListener('click', function() {
        window.location.href = 'edit.html';
    });

    fetchStudents();
});