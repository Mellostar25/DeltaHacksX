// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlEz7cyUuIf6UjtC2e9Wp34Na8C4cZsbM",
  authDomain: "delta-hacks-x.firebaseapp.com",
  projectId: "delta-hacks-x",
  storageBucket: "delta-hacks-x.appspot.com",
  messagingSenderId: "1063173296448",
  appId: "1:1063173296448:web:543c1e08323bf703b0eaa5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

// Initialize Firebase
// Sign up





function signup(){
    let email = document.getElementById("emailSignUp").value
    let password = document.getElementById("passwordSignUp").value
    console.log(password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        console.log("good")
    })
    .catch((error) => {
        console.error(error.message);
    });
}

// Sign in
function signin(){
    let email = document.getElementById('emailSignIn').value
    let password = document.getElementById('passwordSignIn').value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      console.log('User signed in:', user);
    })
    .catch((error) => {
      // Handle errors
      console.error('Sign-in error:', error);
    });
}


document.getElementById('signup').addEventListener('click', () => {
    signup(); // Trigger the function when the button is clicked
});
document.getElementById('signIn').addEventListener('click', () => {
    signin(); // Trigger the function when the button is clicked
});


