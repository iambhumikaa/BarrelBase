// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyBcHuVRa1JhkE7sH0his3Z_UZYgn-h9gXA",
//     authDomain: "barrelbase-61c0b.firebaseapp.com",
//     projectId: "barrelbase-61c0b",
//     storageBucket: "barrelbase-61c0b.firebasestorage.app",
//     messagingSenderId: "72687097331",
//     appId: "1:72687097331:web:7c17d70e05f7ce367a2e86",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// let currentUser = null;

// // ✅ Check user login state
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         currentUser = user;
//         console.log("Logged in as:", user.displayName);
//     } else {
//         console.log("No user logged in.");
//     }
// });

// // ✅ Handle "Book Now" clicks
// document.addEventListener("DOMContentLoaded", () => {
//     const bookButtons = document.querySelectorAll("button");

//     bookButtons.forEach(button => {
//         button.addEventListener("click", async (e) => {
//             if (!currentUser) {
//                 alert("Please sign in with Google to book a cylinder.");
//                 return;
//             }

//             const article = e.target.closest("article");
//             const titleText = article.querySelector("h3").textContent;
//             const priceText = article.querySelector("h4").textContent;

//             // Extract values
//             const companyMatch = titleText.match(/^(.*?) Gas Cylinder/i);
//             const weightMatch = titleText.match(/(\d+(\.\d+)?)kg/);
//             const priceMatch = priceText.match(/₹(\d+(\.\d+)?)/);

//             const CylinderCompany = companyMatch ? companyMatch[1] + " Gas Cylinder" : "Unknown";
//             const CylinderWeight = weightMatch ? weightMatch[0] : "Unknown";
//             const TotalPrice = priceMatch ? priceMatch[1] : "0";

//             try {
//                 const docRef = await addDoc(collection(db, "BarrelBase_bookingDetails"), {
//                     UserName: currentUser.displayName,
//                     UserID: currentUser.uid,
//                     CylinderCompany,
//                     CylinderWeight,
//                     TotalPrice,
//                     DeliveryStatus: "pending",
//                 });

//                 alert("Booking successful! ID: " + docRef.id);
//                 console.log("Booking added:", docRef.id);
//             } catch (error) {
//                 console.error("Error booking cylinder:", error);
//                 alert("Booking failed. Try again.");
//             }
//         });
//     });
// });
