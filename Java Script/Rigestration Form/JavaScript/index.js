// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ8Eas4Jqp3hvwqV3X08639lZWvPnhN-Y",
  authDomain: "sajid-mushtaqprojects.firebaseapp.com",
  projectId: "sajid-mushtaqprojects",
  storageBucket: "sajid-mushtaqprojects.appspot.com",
  messagingSenderId: "236320691023",
  appId: "1:236320691023:web:8db0ecf0cbf31282846b3a",
  measurementId: "G-KKBWJ4080F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("signupBtn").onclick = function () {
    document.getElementById("signupModal").style.display = "block";
  };

  document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementById("signupModal").style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == document.getElementById("signupModal")) {
      document.getElementById("signupModal").style.display = "none";
    }
  };

  // Signup form submission
  document.getElementById("signupForm").onsubmit = function (event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var signupEmail = document.getElementById("signupEmail").value;
    var signupPassword = document.getElementById("signupPassword").value;
    var repeatPassword = document.getElementById("repeatPassword").value;

    if (signupPassword !== repeatPassword) {
      swal("Oops...", "Passwords do not match!", "error");
      return;
    }

    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        swal("Success", "User registered successfully!", "success");
        document.getElementById("signupModal").style.display = "none";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        swal("Error", errorMessage, "error");
      });
  };

  // Login form submission
  document.getElementById("loginForm").onsubmit = function (event) {
    event.preventDefault();
    var loginEmail = document.getElementById("email").value;
    var loginPassword = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        // swal("Good job!", "Login success", "success")
        window.location.href = "Registration.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        swal("Error", errorMessage, "error");
      });
  };
});
