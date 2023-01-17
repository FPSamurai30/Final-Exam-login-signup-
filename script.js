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
    var username = document.getElementById("signup-username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("signup-password").value;
    console.log("Username: " + username + " Email: " + email + " Password: " + password);
  
    // Send the sign up data to the server or save it in the database
    // Here you can add validation and encryption of the data
  }
  
  