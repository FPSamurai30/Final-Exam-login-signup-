document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault(); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("Username: " + username + " Password: " + password);
  });
  
  function checkCredentials() {
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  

    if (username === "admin" && password === "password") {
      redirectToYoutube();
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
  
  function redirectToYoutube() {
    window.location.href = "https://www.youtube.com";
  }
  
  
  function switchForm() {
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");
    var switchForm = document.getElementById("switch-form");
    if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
      switchForm.innerHTML = "Don't have an account? <span class='bold-underline'>Sign Up</span>";
    } else {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
      switchForm.innerHTML = "Already have an account? <span class='bold-underline'>Log In</span>";
    }
  }
  
  
  function submitSignupForm() {
    event.preventDefault();
    // Get the form data
    var username = document.getElementById("username-input").value;
    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;

    // Validate the form data
    if (!username || !email || !password) {
        alert("Please fill in all the fields.");
        return;
    }

    // Encrypt the password
    var encryptedPassword = encrypt(password);

    // Prepare the data to be sent to GitHub
    var data = {
        "username": username,
        "email": email,
        "password": encryptedPassword
    };

    // Send the data to GitHub
    fetch("https://github.com/finalexam_1st_sem_ads1wst", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(function(data) {
        console.log("Data uploaded successfully to GitHub.");
    })
    .catch(function(error) {
        console.log("Error uploading data to GitHub: " + error);
    });
}
  
  
  
