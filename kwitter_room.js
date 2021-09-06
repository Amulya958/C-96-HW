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
//ADD YOUR FIREBASE LINKS HERE
user_name= localStorage.getItem("user_name");
document.getElementById("user_name_display").innerHTML= "Welcome"+ user_name +"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name -" + Room_names);
row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output_trendingrooms").innerHTML += row;
});
});
}
 getData();

      function add_room(){
            room_name= document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
            purpose: "adding roomname"
            });
localStorage.setItem("room_name" , room_name);
window.location="kwitter_page.html";

}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name" , name);
window.location="kwitter_page.html";
}

function logout_page()
{
localStorage.removeItem("user_name");
window.location="index.html";
localStorage.removeItem("room_name");
}
