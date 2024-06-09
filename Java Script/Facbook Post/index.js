// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getFirestore,db} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJ8Eas4Jqp3hvwqV3X08639lZWvPnhN-Y",
    authDomain: "sajid-mushtaqprojects.firebaseapp.com",
    projectId: "sajid-mushtaqprojects",
    storageBucket: "sajid-mushtaqprojects.appspot.com",
    messagingSenderId: "236320691023",
    appId: "1:236320691023:web:ffcb708683cb1cd4846b3a",
    measurementId: "G-0CRL4VW0LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



const fullName=document.getElementById("signupName")
const email = document.getElementById('signupEmail').value;
const password = document.getElementById('signupPassword').value;



let userData={
    fullName : fullName,
    email : email,
    password : password,
    
}
// Sign Up Function
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const signupName = document.getElementById('signupName').value;

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then(async(userCredential) => {
            const user = userCredential.user;
            console.log('Signed up:', user.email);
            try {
                const docRef = await addDoc(collection(db, "users"), {
                  ...userData,
                  uid : user.uid,
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
            alert(`Hi ${signupName}, Your ID has been created. Please sign in.`);
            // Close the signup modal
            document.querySelector('#signupModal .btn-close').click();
            // Programmatically click the login button or scroll to the login section
            document.getElementById('loginButton').focus();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error:', errorCode, errorMessage);
            alert(`Error: ${errorMessage}`);
        });
});

// Login Function
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Logged in:', user.email);
            // alert('Logged in successfully');
            window.location.href="fbClone.html"
            // Redirect or perform other actions here after login
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error:', errorCode, errorMessage);
            alert(`Your Id Not Found Please Sign-Up First  :${errorMessage}`);
         
        });
});
