import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

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
const storage = getStorage(app);
const auth = getAuth(app);

let isUploading = false;



document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  populateDepartmentDropdowns();
  userForm.addEventListener("submit", handleUserFormSubmit);
  document.getElementById("province").addEventListener("change", updateCities);
  hideLoader(); // Hide loader when page loads
});
// Update City Function
function updateCities() {
  const provinceSelect = document.getElementById("province");
  const citySelect = document.getElementById("city");

  // Clear existing options
  citySelect.innerHTML = '<option value="">Select Division/ڈویژن</option>';

  // Get selected province
  const selectedProvince = provinceSelect.value;

  // Populate cities based on the selected province
  const cities = {
    sindh: [
      "حیدرآباد",
      "بنبھورڈویژن",
      "میرپورخاصڈویژن",
      "نوابشاہڈویژن",
      "سکھر ڈویژن",
      "لاڑکانہ ڈویژن",
    ],
    punjab: [
      "بہاولپور ڈویژن",
      "ڈی جی خان ڈویژن",
      "ملتان ڈویژن",
      "سرگودھا ڈویژن",
      "فیصل آباد ڈویژن",
      "ساہیوال ڈویژن",
    ],
    ict: ["زون1", "زون2 ", "زون3   ", "زون4 ", "زون5 "],
    lahore: [
      "عزیز بھٹی ٹاؤن",
      "شالیمار ٹاؤن ",
      " لاہور کنٹونمنٹ  ",
      " واہگہ ٹاؤن",
      "راوی ٹاؤن ",
    ],
    kpk: [
      "ہزارہڈویژن",
      "بنوں ڈویژن",
      "ڈیرہ اسماعیل خان ڈویژن",
      "کوہاٹ ڈویژن",
      "مردان ڈویژن",
      "پشاور ڈویژن",
      "مالاکنڈ ڈویژن",
    ],
    balochistan: [
      "قلات ڈویژن",
      "مکران ڈویژن",
      "کوئٹہ ڈویژن",
      "ژوب ڈویژن",
      "سبی ڈویژن",
      "نصیر آباد ڈویژن",
      "رخشان ڈویژن",
    ],
    kashmir: ["مظفرآباد ڈویژن", "میرپورڈویژن", "پونچھ ڈویژن"],
    gb: ["بلتستان ڈویژن", "استور ڈویژن", "دیامردویژن", "گلگت ڈویژن"],
    karachi: [
      "ضلع غربی",
      "ضلع جنوبی",
      "ضلع شرقی",
      "ضلع وسطی",
      "ضلع ملیر",
      "ضلع کورنگی",
    ],
  };

  if (selectedProvince && cities[selectedProvince]) {
    cities[selectedProvince].forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
}




// handle User Form Submit
async function handleUserFormSubmit(event) {
  event.preventDefault();

  const userForm = document.getElementById("userForm");
  const photoFile = document.getElementById("photo").files[0];
  const idCardFrontFile = document.getElementById("idCardFront").files[0];
  const idCardBackFile = document.getElementById("idCardBack").files[0];
  const permissionFormFile = document.getElementById("permissionForm").files[0];

  // Check if files are selected
  if (!photoFile || !idCardFrontFile || !idCardBackFile || !permissionFormFile) {
    Swal.fire("Error", "Please upload all required files", "error");
    return;
  }

  const userData = {
    name: userForm.name.value,
    fatherName: userForm.fatherName.value,
    province: userForm.province.value,
    city: userForm.city.value,
    employeeCode: userForm.employeeCode.value,
    testNumber: userForm.testNumber.value,
    mobileNumber: userForm.mobileNumber.value,
    confirmMobileNumber: userForm.confirmMobileNumber.value,
    department: userForm.department.value,
    testDepartment: userForm.testDepartment.value,
  };

  if (validateFormData(userData)) {
    try {
      showLoader(); // Show loader before starting file upload

      // Upload files to Firebase Storage
      const photoURL = await uploadFile(photoFile, "photos");
      const idCardFrontURL = await uploadFile(idCardFrontFile, "idCardFronts");
      const idCardBackURL = await uploadFile(idCardBackFile, "idCardBacks");
      const permissionFormURL = await uploadFile(permissionFormFile, "permissionForms");

      // Add file URLs to user data
      userData.photoURL = photoURL;
      userData.idCardFrontURL = idCardFrontURL;
      userData.idCardBackURL = idCardBackURL;
      userData.permissionFormURL = permissionFormURL;

      // Save user data to Firestore
      const docRef = await addDoc(collection(db, "users"), userData);
      console.log("Document written with ID: ", docRef.id);
      Swal.fire("Success", "آپ کا ڈیٹا کامیابی کے ساتھ جمع ہو گیا ہے!", "success");
      userForm.reset();
    } catch (error) {
      console.error("Error submitting form: ", error);
      Swal.fire("Error", `دوبارہ کوشش فرمائیں: ${error.message}`, "error");
    } finally {
      hideLoader(); // Hide loader after all operations are complete
    }
  } else {
    Swal.fire("Error", "تمام کالم مکمل فِل کریں اور تمام تصاویر اپلوڈ کریں", "error");
  }
}

function showLoader() {
  document.getElementById("loader").style.display = "block";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}
// uploadFile function
async function uploadFile(file, folder) {
  if (!file) {
    throw new Error("No file provided");
  }
  if (file.size > 500 * 1024) {
    throw new Error(`File size exceeds 500 KB limit. Current size: ${(file.size / 1024).toFixed(2)} KB`);
  }
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (!allowedTypes.includes(file.type)) {
    throw new Error(`Invalid file type: ${file.type}. Only JPEG, JPG, and PNG are allowed`);
  }
  const storageRef = ref(storage, `${folder}/${Date.now()}_${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        
      },
      (error) => {
        console.error('Error uploading file:', error);
        reject(error);
      },
      async () => {
        console.log('File uploaded successfully');
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          reject(error);
        }
      }
    );
  });
}


// validateFormData
function validateFormData(formData) {
  for (let key in formData) {
    if (formData[key] === "") {
      return false;
    }
  }
  return true;
}

// DepartmentDropdowns

function populateDepartmentDropdowns() {
  const departments = {
    testDepartment: [
      "امام مساجد",
      "مبلغین",
      "مجلس عشر",
      "مدرسۃ المدینہ کل وقتی",
      "مدرسۃ المدینہ شارٹ ٹائم",
      "فیضان آن لائن اکیڈمی(مدرسۃ المدینہ آن لائن بوائز)",
      "مدرسۃ المدینہ بالغان",
      "قرآن ٹیچر کورس",
      "فیضانِ تجوید  کورس",
      "قرآن  لرننگ کورس",
      "کورسزمجلس",
      "مجلس کفن دفن",
      "کنسٹرکشن و پراپرٹی",
      "مجلس 12 ماہ",
      "مجلس مدنی قافلہ",
      "فیضان قرآن فاؤنڈیشن",
      "دارالمدینہ مجلس",
      "جامعۃ المدینہ",
      "جامعۃ المدینہ آن لائن",
      "شعبۂ تعلیم",
      "امامت کورس",
      "ائمہ فیضان مدینہ",
      "دیگر۔۔۔",
    ],
    department: [
      "اذکار نماز ٹیسٹ(50مقامات)",
      "اذکار نماز ٹیسٹ(40مقامات)",
      "اذکار نماز ٹیسٹ(30مقامات)",
      "اذکار نماز ٹیسٹ(20مقامات)",
      "اذکار نماز ٹیسٹ(10مقامات)",
      "اذکار نماز (مبلغ)",
      "اذکار نماز ٹیسٹ (لیول1)",
      "تدریسی ٹیسٹ(قاعدہ ناظرہ)",
      "تدریسی ٹیسٹ(حفظ)",
      "تدریسی ٹیسٹ (صرف ناظرہ)",
      "تدریسی ٹیسٹ(صرف مدنی قاعدہ)",
      "تدریسی ٹیسٹ (مدرس کورس)",
      "تراویح ٹیسٹ(یاداشت)",
      "فرض علوم",
      "کفن دفن ٹیسٹ",
      "مسائل نماز",
      "مسائل نماز ومبلغ کورس",
      "مدنی قاعدہ ناظرہ",
      "نماز ناظرہ حفظ",
    ],
  };

  const departmentSelect = document.getElementById("department");
  const testDepartmentSelect = document.getElementById("testDepartment");

  departments.department.forEach((dept) => {
    const option = document.createElement("option");
    option.value = dept;
    option.textContent = dept;
    departmentSelect.appendChild(option);
  });

  departments.testDepartment.forEach((dept) => {
    const option = document.createElement("option");
    option.value = dept;
    option.textContent = dept;
    testDepartmentSelect.appendChild(option);
  });
}


// admin pannel
const validAdminCodes = ['0001', '0002', '0003', '0004', '0005', '0006', '0007', '0008', '0009', '0010', '0011', '0012', '0013', '0014', '0015'];

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showSignUpForm() {
  document.getElementById('signUpForm').classList.remove('hidden');
  document.getElementById('signInForm').classList.add('hidden');
}

document.getElementById('adminBtn').addEventListener('click', () => {
  document.getElementById('idForm').classList.remove('hidden');
});

document.getElementById('verifyId').addEventListener('click', () => {
  const adminId = document.getElementById('adminId').value;
  if (validAdminCodes.includes(adminId)) {
    document.getElementById('signInForm').classList.remove('hidden');
    document.getElementById('idForm').classList.add('hidden');
  } else {
    alert('Invalid Admin ID');
  }
});

document.getElementById('signIn').addEventListener('click', async () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = 'admin.html';
  } catch (error) {
    console.error('Sign In Error:', error);
    if (error.code === 'auth/invalid-login-credentials' || error.code === 'auth/user-not-found') {
      alert('Invalid email or password. Please check your credentials or sign up if you don\'t have an account.');
      showSignUpForm();
    } else if (error.code === 'auth/wrong-password') {
      alert('Incorrect password. Please try again.');
    } else {
      alert('Error signing in: ' + error.message);
    }
  }
});

document.getElementById('signUp').addEventListener('click', async () => {
  const email = document.getElementById('newEmail').value.trim();
  const password = document.getElementById('newPassword').value;

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (password.length < 6) {
    alert('Password should be at least 6 characters long.');
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert('Account created successfully. Please sign in.');
    document.getElementById('signUpForm').classList.add('hidden');
    document.getElementById('signInForm').classList.remove('hidden');
  } catch (error) {
    console.error('Sign Up Error:', error);
    if (error.code === 'auth/email-already-in-use') {
      alert('This email is already in use. Please try signing in.');
      document.getElementById('signUpForm').classList.add('hidden');
      document.getElementById('signInForm').classList.remove('hidden');
    } else {
      alert('Error creating account: ' + error.message);
    }
  }
});