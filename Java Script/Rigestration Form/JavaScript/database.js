import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

const fetchAndDisplayEmployees = async () => {
  const employeeTableBody = document.getElementById("tableBodyData");
  let serialNumber = 1; // Initialize the serial number counter
  try {
    const querySnapshot = await getDocs(collection(db, "usersData"));
    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return;
    }
    querySnapshot.forEach((doc) => {
      const employeeData = doc.data();
      console.log("Employee Data:", employeeData); // Debugging log
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${serialNumber}</td>
        <td>${employeeData.firstName} ${employeeData.lastName}</td>
        <td>${employeeData.email}</td>
        <td>${employeeData.country}, ${employeeData.city}</td>
        <td>${employeeData.phone}</td>
        <td>${employeeData.Gender}</td>
      `;
      employeeTableBody.appendChild(row);
      serialNumber++; // Increment the serial number counter
    });
  } catch (e) {
    console.error("Error fetching employees: ", e);
  }
};

document.getElementById("logoutButton").addEventListener("click", async () => {
  try {
    await signOut(auth);
    window.location.href = "index.html";
  } catch (e) {
    console.error("Error signing out: ", e);
  }
});

fetchAndDisplayEmployees();
