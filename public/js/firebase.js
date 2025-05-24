// //firebase setup for barrelbase

// // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// // import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// // import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";


// // Firebase configuration object
// const firebaseConfig = {
//   apiKey: "AIzaSyBcHuVRa1JhkE7sH0his3Z_UZYgn-h9gXA",
//   authDomain: "barrelbase-61c0b.firebaseapp.com",
//   projectId: "barrelbase-61c0b",
//   storageBucket: "barrelbase-61c0b.firebasestorage.app",
//   messagingSenderId: "72687097331",
//   appId: "1:72687097331:web:7c17d70e05f7ce367a2e86",
// };

// // Initialize Firebase app
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Google Auth for client side
// const auth = getAuth(app);
// auth.languageCode = "en";
// const provider = new GoogleAuthProvider();

// const googleLogin = document.getElementById("GoogleLoginBtn");
// googleLogin.addEventListener("click", function () {
//   // Sign in with Google Popup
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const user = result.user;
//       console.log("User signed in:", user);
//       window.location.href = "index.html";
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error("Error signing in:", errorCode, errorMessage);
//     });
// });

// const googleLoginAdmin = document.getElementById("GoogleLoginBtnAdmin");
// googleLogin.addEventListener("click", function () {
//   // Sign in with Google Popup
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const user = result.user;
//       console.log("User signed in:", user);
//       window.location.href = "admin.html";
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error("Error signing in:", errorCode, errorMessage);
//     });
// });

// // Firestore setup
// const db = getFirestore(app);

// // Async function to add data to Firestore
// async function addDataToFirestore() {
//   try {
//     console.log("Adding document to Firestore...");
//     const docRef = await addDoc(collection(db, "BarrelBase_bookingDetails"), {
//       UserName: "John Doe",
//       UserID: "1234567890",
//       CylinderCompany: "Indane Gas Cylinder",
//       CylinderWeight: "14.2 kg",
//       TotalPrice: "810.50",
//       DeliveryStatus: "pending"
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

// // Call the function to add data to Firestore
// addDataToFirestore();

// // Async function to get data from Firestore
// async function getDataFromFirestore() {
//   try {
//     console.log("Fetching documents from Firestore...");
//     const querySnapshot = await getDocs(collection(db, "BarrelBase_bookingDetails"));
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     });
//   } catch (e) {
//     console.error("Error getting documents: ", e);
//   }
// }

// // Call the function to get data from Firestore
// getDataFromFirestore();
