// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-aut.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4MOKTdqKdTXKDBx3jV2LrXv1YiSzKi6c",
    authDomain: "moiz-ali-project.firebaseapp.com",
    projectId: "moiz-ali-project",
    storageBucket: "moiz-ali-project.appspot.com",
    messagingSenderId: "634368667169",
    appId: "1:634368667169:web:85b9b0b443746e7eb43d60",
    measurementId: "G-FB9E7GW2JH"
};
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const email = document.getElementById("email");
const password = document.getElementById("password");
const btnup = document.getElementById("btn-up");
const emailin = document.getElementById("emailin");
const passwordin = document.getElementById("passwordin");
const btnin = document.getElementById("btn-in");
const name = document.getElementById("name");
const Signup = document.getElementById("sign-up");
const container = document.getElementById("container");
const visible = document.getElementById("visible");
const btnlog = document.getElementById("btnlog");

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});
btnlog.addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            // alert("Sign-out successful")
            container.style.display = "flex";
            visible.style.display = "none";
        })
        .catch((error) => {
            // An error happened.
        });
});


const createUser = () => {
    const emails = email.value;
    const passwords = password.value;
    if (!emails || !passwords) {
        return alert("invalid email/password");
    }
    createUserWithEmailAndPassword(auth, emails, passwords)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            Signup.style.display = "none";
            console.log("SignUP ======> succsess");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage + "======> error");
        })
    // Signup.style.display = "none";
}

const SignInUser = () => {
    const emailsin = emailin.value;
    const passwordsin = passwordin.value;
    if (!emailsin || !passwordsin) {
        return alert("invalid email/password");
    }
    signInWithEmailAndPassword(auth, emailsin, passwordsin)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            container.style.display = "none";
            visible.style.display = "flex";
            // window.location.pathname = "./dashboard.html";
            console.log("SignIn ======> succsess");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage + "======> error");

        });
}


btnup.addEventListener("click", createUser);
btnin.addEventListener("click", SignInUser);