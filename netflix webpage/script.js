// Function to save user account details during signup
function signup() {
    const signupForm = document.getElementById('signupForm');
    const formData = new FormData(signupForm);
    const email = formData.get('email');
    const password = formData.get('newPassword');
  
    // Save user details to local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  
    // Clear the signup form
    signupForm.reset();
  }
  
  // Function to check login credentials and perform login
  function login() {
    const loginForm = document.getElementById('loginForm');
    const email = loginForm.loginEmail.value;
    const password = loginForm.loginPassword.value;
  
    // Retrieve user details from local storage
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
  
    // Check if login credentials match
    if (email === savedEmail && password === savedPassword) {
      alert('Login successful!');
      // Here, you can redirect the user to a dashboard or home page.
    } else {
      alert('Invalid email or password. Please try again.');
    }
  
    // Clear the login form
    loginForm.reset();
  }
  
  // Function to clear the form and remove saved data from local storage
  function clearForm() {
    const signupForm = document.getElementById('signupForm');
    signupForm.reset();
  
    // Remove user details from local storage
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }
  
  // Call the signup function on form submission
  document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    signup();
  });
  
  // Call the login function on login form submission
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    login();
  });