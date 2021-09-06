const firebaseConfig = {
    apiKey: "AIzaSyAl7x97EvRVZ_b4vCfjUcXRdfIogLKUyMM",
    authDomain: "kwitter-mitter.firebaseapp.com",
    databaseURL: "https://kwitter-mitter-default-rtdb.firebaseio.com",
    projectId: "kwitter-mitter",
    storageBucket: "kwitter-mitter.appspot.com",
    messagingSenderId: "198696431311",
    appId: "1:198696431311:web:3895e7737be0ce2a0791ba",
    measurementId: "G-CL63WJ7127"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
 room_name= localStorage.getItem("room_name");

 function send()
 {

msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    Name: user_name ,
    message: msg ,
    like:0 
});

document.getElementById("msg").value="";
 }

 function logout(){
window.location="kwitter_room.html";
 }