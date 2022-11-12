var userName = document.getElementById("namee").value;
var password = document.getElementById("passcode").value;

function login() {
    if(userName == "admin123" && password == 123456 ) {
        // alert ("Login successfully");
        window.location = "portal.html"; // Redirecting to other page.
        return false;
    } 
    else {
        alert("Login failed")
    }
}
export default login;


const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal_wrapper');
const close = document.querySelector('#closed');
const btn_purple2 = document.querySelector('.btn_purple2');
trigger.addEventListener('click', function(){
    modalWrapper.classList.add('active');
});
close.addEventListener('click', function(){
    modalWrapper.classList.remove('active');
});
btn_purple2.addEventListener('click', function(){ 
    modalWrapper.classList.remove('active');
    alert('LogIn successfully');    
});

// var hidediv = document.getElementById("hideshow");
// var email = document.getElementsByTagName(input[type="email"]).value;
// var password = document.getElementsByTagName(input[type="password"]).value;
// console.log(password)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHsnTyHSxlQxyYHU47e8xbZf1yDOfOjWU",
  authDomain: "attendence-13c2e.firebaseapp.com",
  projectId: "attendence-13c2e",
  storageBucket: "attendence-13c2e.appspot.com",
  messagingSenderId: "702283216302",
  appId: "1:702283216302:web:8efe4d514d4841fd29443f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);