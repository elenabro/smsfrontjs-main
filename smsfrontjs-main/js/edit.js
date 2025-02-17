document.addEventListener('DOMContentLoaded', function() {
    // const apiUrl = 'http://54.234.135.255:8081/students';
    const apiUrl = 'http://localhost:8080/students';
    const apiKey = 'mySecretKey';
    const urlParams = new URLSearchParams(window.location.search);
    const studentId = urlParams.get('id');

    const studentIdInput = document.getElementById('studentId');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const ageInput = document.getElementById('age');
    const majorInput = document.getElementById('major');
    const studentForm = document.getElementById('studentForm');

    if (studentId) {
        fetch(`${apiUrl}?id=${studentId}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            studentIdInput.value = data.id;
            firstNameInput.value = data.firstName;
            lastNameInput.value = data.lastName;
            ageInput.value = data.age;
            majorInput.value = data.major;
        })
        .catch(error => console.error('Error fetching student:', error));
    }

    studentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const studentData = {
            id: studentIdInput.value,
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            age: ageInput.value,
            major: majorInput.value
        };

        const method = studentId ? 'PUT' : 'POST';
        const url = studentId ? `${apiUrl}?id=${studentId}` : apiUrl;

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': apiKey
            },
            body: JSON.stringify(studentData)
        })
        .then(response => {
            if (response.ok) {
                window.location.href = 'index.html';
            } else {
                console.error('Error saving student:', response.statusText);
            }
        })
        .catch(error => console.error('Error saving student:', error));
    });
});