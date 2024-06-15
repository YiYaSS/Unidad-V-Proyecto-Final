// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyD1ZjFouvfWbpxBNNH50Kia-X_1PtE2pjE",
   authDomain: "tastylog-8db2f.firebaseapp.com",
   databaseURL: "https://tastylog-8db2f-default-rtdb.firebaseio.com",
   projectId: "tastylog-8db2f",
   storageBucket: "tastylog-8db2f.appspot.com",
   messagingSenderId: "16878894839",
   appId: "1:16878894839:web:d2b19fa800390b99dcddf2"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);


submit.addEventListener("click", (e) => {
    

   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;
    

   createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {
            // Signed up 
         const user = userCredential.user;
            // ...user.ip
         set(ref(database, 'users/' + user.uid), {
            email: email,
            password: password
         })
            .then(() => {
               // Data saved successfully!
               alert('usuario registrado');
            })
            .catch((error) => {
               // The write failed...
               alert(error);
            });
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
            // ..
         alert(errorMessage);
   });

});

