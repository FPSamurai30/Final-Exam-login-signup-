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
  
    // validate the data
    if (!username || !email || !password) {
      alert("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Invalid email address.");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
  
    // encrypt the password
    var encryptedPassword = encryptPassword(password);
  
    // create an object with the user data
    var userData = {
      username: username,
      email: email,
      password: encryptedPassword
    };
  
    // send the user data to the server
    fetch("https://github.com/finalexam_1st_sem_ads1wst", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      // check the response from the server
      if (data.success) {
        alert("Sign up successful! Please log in.");
        switchForm();
      } else {
        alert("Error: " + data.message);
      }
    })
    .catch(error => console.log(error));
  }
  
  function validateEmail(email) {
    // check if the email is valid
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  
    // Send the sign up data to the server or save it in the database
    // Here you can add validation and encryption of the data
  
  
  
