import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqrOzbrKd2V-9HBtCTRblGkS4Go8JvOG0",
  authDomain: "test-majlis-hr.firebaseapp.com",
  projectId: "test-majlis-hr",
  storageBucket: "test-majlis-hr.appspot.com",
  messagingSenderId: "829868079944",
  appId: "1:829868079944:web:0c318885f63d8c4fb8d17d",
  measurementId: "G-9LZMYQ4ZC3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", async () => {
  await displayUserData();
});

async function displayUserData() {
    const userTableBody = document.getElementById("userTableBody");
    const fallbackImageURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';
  
    function createImageCell(url, alt) {
      return `<td>
        <img src="${url}" alt="${alt}" onerror="this.onerror=null; this.src='${fallbackImageURL}'; this.alt='Image not available';" style="max-width: 100px; max-height: 100px;">
      </td>`;
    }
  
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      userTableBody.innerHTML = ''; // Clear existing rows
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        const row = `
          <tr data-id="${doc.id}">
            <td>${userData.name || ''}</td>
            <td>${userData.fatherName || ''}</td>
            <td>${userData.province || ''}</td>
            <td>${userData.city || ''}</td>
            <td>${userData.employeeCode || ''}</td>
            <td>${userData.testNumber || ''}</td>
            <td>${userData.mobileNumber || ''}</td>
            <td>${userData.confirmMobileNumber || ''}</td>
            ${createImageCell(userData.photoURL, "User Photo")}
            ${createImageCell(userData.idCardFrontURL, "ID Card Front")}
            ${createImageCell(userData.idCardBackURL, "ID Card Back")}
            ${createImageCell(userData.permissionFormURL, "Permission Form")}
            <td>${userData.department || ''}</td>
            <td>${userData.testDepartment || ''}</td>
            <td><input type="date" value="${userData.testDate || ''}" onchange="updateField('${doc.id}', 'testDate', this.value)"></td>
            <td><input type="time" value="${userData.testTime || ''}" onchange="updateField('${doc.id}', 'testTime', this.value)"></td>
            <td>
              <select onchange="updateField('${doc.id}', 'testOnTime', this.value)">
                <option value="yes" ${userData.testOnTime === "yes" ? "selected" : ""}>Yes</option>
                <option value="no" ${userData.testOnTime === "no" ? "selected" : ""}>No</option>
              </select>
            </td>
            <td contenteditable="true" onblur="updateField('${doc.id}', 'reasonOfLateTest', this.textContent)">${userData.reasonOfLateTest || ''}</td>
            <td><button onclick="deleteUser('${doc.id}')" class="delete-btn">Delete</button></td>
          </tr>
        `;
        userTableBody.insertAdjacentHTML("beforeend", row);
      });
    } catch (error) {
      console.error("Error fetching users: ", error);
      Swal.fire("Error", "Failed to fetch user data", "error");
    }
  }

async function updateField(userId, field, value) {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      [field]: value,
    });
    console.log(`Updated ${field} for user ${userId}`);
  } catch (error) {
    console.error("Error updating field: ", error);
    Swal.fire("Error", "Failed to update field", "error");
  }
}

async function deleteUser(userId) {
  try {
    await deleteDoc(doc(db, "users", userId));
    document.querySelector(`tr[data-id="${userId}"]`).remove();
    Swal.fire("Success", "User deleted successfully", "success");
  } catch (error) {
    console.error("Error deleting user: ", error);
    Swal.fire("Error", "Failed to delete user", "error");
  }
}

window.updateField = updateField;
window.deleteUser = deleteUser;
