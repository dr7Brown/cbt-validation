document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for validation

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const age = document.getElementById("age").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const color = document.getElementById("color").value;
    const fileInput = document.getElementById("file").files;
    const subscribe = document.getElementById("subscribe").checked;
    const country = document.getElementById("country").value;
    const comments = document.getElementById("comments").value.trim();

    // Validation Results
    let isValid = true;
    let errorMessage = "";

    // Username validation
    if (username.length < 3) {
      isValid = false;
      errorMessage += "Username must be at least 3 characters long.\n";
    }

    // Email validation
    if (!validateEmail(email)) {
      isValid = false;
      errorMessage += "Please enter a valid email address.\n";
    }

    // Password validation
    if (!validatePassword(password)) {
      isValid = false;
      errorMessage +=
        "Password must be at least 8 characters long and include a number and a special character.\n";
    }

    // Age validation
    const ageNumber = Number(age);
    if (isNaN(ageNumber) || ageNumber < 1 || ageNumber > 120) {
      isValid = false;
      errorMessage += "Please enter a valid age between 1 and 120.\n";
    }

    // Birthdate validation
    if (!birthdate) {
      isValid = false;
      errorMessage += "Please select your birthdate.\n";
    }

    // Color validation (optional, just for demonstration)
    if (!color) {
      isValid = false;
      errorMessage += "Please select your favorite color.\n";
    }

    // File validation (check if file is selected)
    if (fileInput.length === 0) {
      isValid = false;
      errorMessage += "Please upload a file.\n";
    }

    // Country validation
    if (!country) {
      isValid = false;
      errorMessage += "Please select your country.\n";
    }

    // Comments validation
    if (comments.length < 10) {
      isValid = false;
      errorMessage += "Comments must be at least 10 characters long.\n";
    }

    // Show errors or submit the form
    if (!isValid) {
      alert(errorMessage);
    } else {
      // Form submission logic (e.g., send data to server)
      alert("Form submitted successfully!");
      console.log("Form data:", {
        username,
        email,
        password,
        age: ageNumber,
        birthdate,
        color,
        subscribe,
        country,
        comments,
        file: fileInput[0].name, // Displaying the file name
      });
    }
  });

// Function to validate email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Function to validate password
function validatePassword(password) {
  // Password must be at least 8 characters long and include a number and a special character
  const passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  return passwordPattern.test(password);
}
