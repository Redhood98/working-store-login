document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const userList = document.getElementById('userList');
    const loginPageButton = document.getElementById('loginPageButton');
    const clearDataButton = document.getElementById('clearDataButton');

    // Load users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Function to display users
    function displayUsers() {
        if (userList) {
            userList.innerHTML = '';
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.username;
                userList.appendChild(li);
            });
        }
    }

    // Display users on page load
    displayUsers();

    // Handle registration form submission
    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Add new user to the array
            users.push({ username, password });

            // Save users to local storage
            localStorage.setItem('users', JSON.stringify(users));

            // Display updated users list
            displayUsers();

            // Clear form fields
            registrationForm.reset();
        });
    }

    // Navigate to login page
    if (loginPageButton) {
        loginPageButton.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }
    //
    if(clearDataButton){
        clearDataButton.addEventListener('click', () => {
            localStorage.removeItem('users');
            users.length = 0; // clears the array
            displayUsers(); //updates the displayed user list
            alert('User data cleared')
        })
    }
    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const loginUsername = document.getElementById('loginUsername').value;
            const loginPassword = document.getElementById('loginPassword').value;

            // Find user with matching username and password
            const user = users.find(user => user.username === loginUsername && user.password === loginPassword);
            if (user) {
                // Redirect to YouTube page
                window.location.href = 'youtube.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }
});
