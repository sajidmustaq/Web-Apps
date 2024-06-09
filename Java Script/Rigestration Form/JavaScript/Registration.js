import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
const db = getFirestore(app);
const auth = getAuth(app);

var submit = document.getElementById("submit");

submit.addEventListener("click", async(e) => {
  e.preventDefault();

  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var country = document.getElementById("country").value;
  var city = document.getElementById("cityList").value;
  var phone = document.getElementById("phoneNumber").value;
  var maleRadio = document.getElementById("genderMale");
  var femaleRadio = document.getElementById("genderFemale");
  var selectedGender = "";

  if (maleRadio.checked) {
    selectedGender = maleRadio.value;
  } else if (femaleRadio.checked) {
    selectedGender = femaleRadio.value;
  } else {
    console.log("No gender selected");
  }

  var email = document.getElementById("emailIdRgFrm").value;
  var password = document.getElementById("passwordRgFrm").value;
  
  if (!firstName || !lastName || !country || !city || !phone || !selectedGender || !email || !password) {
    // alert("All fields are required. Please fill out all fields.");
    Swal.fire({
      icon: "error",
      text: "All fields are required. Please fill out all fields.",
      
    });
    return;
  }
  let userData = {
    firstName: firstName,
    lastName: lastName,
    country: country,
    city: city,
    phone: phone,
    Gender: selectedGender,
    email: email,
    password: password
  };

  try {
    const docRef = await addDoc(collection(db, "usersData"), { ...userData });
    console.log("Document written with ID: ", docRef.id);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Data Has Been Submited",
      showConfirmButton: false,
      timer: 1500
    });
   // Clear the form fields
   document.getElementById("first-name").value = '';
   document.getElementById("last-name").value = '';
   document.getElementById("country").value = '';
   document.getElementById("cityList").value = '';
   document.getElementById("phoneNumber").value = '';
   maleRadio.checked = false;
   femaleRadio.checked = false;
   document.getElementById("emailIdRgFrm").value = '';
   document.getElementById("passwordRgFrm").value = '';


   setTimeout(() => {
     window.location.href = "database.html";
   }, 1500);
 } catch (e) {
   console.error("Error adding document: ", e);
   Swal.fire({
     position: "top-end",
     icon: "error",
     title: "Error storing data: " + e.message,
     showConfirmButton: false,
     timer: 2000
   });
 }

 console.log(userData);
});
