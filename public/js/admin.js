// //Admin firebase setup 
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getFirestore, doc, updateDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyBcHuVRa1JhkE7sH0his3Z_UZYgn-h9gXA",
//   authDomain: "barrelbase-61c0b.firebaseapp.com",
//   projectId: "barrelbase-61c0b",
//   storageBucket: "barrelbase-61c0b.firebasestorage.app",
//   messagingSenderId: "72687097331",
//   appId: "1:72687097331:web:7c17d70e05f7ce367a2e86",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore
// const db = getFirestore(app);

// // Fetch and display bookings
// async function fetchBookings() {
//   try {
//     const querySnapshot = await getDocs(collection(db, "BarrelBase_bookingDetails"));
//     const bookingListDiv = document.getElementById("bookingList");
//     bookingListDiv.innerHTML = ''; // Clear the list before adding new data

//     querySnapshot.forEach((doc) => {
//       const booking = doc.data();
//       const bookingId = doc.id;
      
//       // Create a div for each booking
//       const bookingDiv = document.createElement("div");
//       bookingDiv.classList.add("booking-item");

//       bookingDiv.innerHTML = `
//         <p>User: ${booking.UserName}</p>
//         <p>Cylinder Company: ${booking.CylinderCompany}</p>
//         <p>Cylinder Weight: ${booking.CylinderWeight}</p>
//         <p>Total Price: ${booking.TotalPrice}</p>
//         <p>Status: ${booking.DeliveryStatus}</p>
//         <button class="cancel-btn" data-id="${bookingId}">Cancel Request</button>
//         <hr>
//       `;

//       bookingListDiv.appendChild(bookingDiv);
//     });

//     // Add event listeners for the cancel buttons
//     const cancelButtons = document.querySelectorAll(".cancel-btn");
//     cancelButtons.forEach(button => {
//       button.addEventListener("click", cancelBooking);
//     });

//   } catch (error) {
//     console.error("Error fetching bookings:", error);
//   }
// }

// // Cancel booking functionality
// async function cancelBooking(event) {
//   const bookingId = event.target.getAttribute("data-id");

//   try {
//     const bookingRef = doc(db, "BarrelBase_bookingDetails", bookingId);
//     await updateDoc(bookingRef, {
//       DeliveryStatus: "Not Available"
//     });

//     // Update the UI to show cancellation message
//     const bookingDiv = event.target.closest(".booking-item");
//     bookingDiv.innerHTML = `
//       <p>Status: Cylinder is Not Available</p>
//       <p>This booking has been canceled.</p>
//       <hr>
//     `;

//     console.log("Booking canceled:", bookingId);

//   } catch (error) {
//     console.error("Error canceling booking:", error);
//   }
// }

// // Call the function to fetch bookings when the page loads
// document.addEventListener("DOMContentLoaded", fetchBookings);
