var firebaseConfig = {
    apiKey: "AIzaSyCjzRs_UR8V4fptz8Eks7L8dnGno6-L6o0",
    authDomain: "lets-chat-web-app-f0a3e.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-f0a3e-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-f0a3e",
    storageBucket: "lets-chat-web-app-f0a3e.appspot.com",
    messagingSenderId: "641700850149",
    appId: "1:641700850149:web:6d6616e63278dfadff670c"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name : user_name,
          message : msg,
          like : 0
    });
    document.getElementById("msg").value = " ";
}
