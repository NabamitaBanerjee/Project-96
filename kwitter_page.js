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
  room_name = localStorage.getItem("room_name");

  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }

  function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            msg: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
    }

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
//Start code

//End code
     } });  }); }
getData();