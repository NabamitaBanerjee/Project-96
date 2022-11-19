
const firebaseConfig = {
  apiKey: "AIzaSyCocFR57Oq39m2gh80IoOiPddtc8-YaSX8",
  authDomain: "project-95-c8d04.firebaseapp.com",
  databaseURL: "https://project-95-c8d04-default-rtdb.firebaseio.com",
  projectId: "project-95-c8d04",
  storageBucket: "project-95-c8d04.appspot.com",
  messagingSenderId: "830342126372",
  appId: "1:830342126372:web:9cb93a7e258b56fbb671b1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom()
{
    room_name = document.getElementById("room_name");
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("roomname - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name) { console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
    }