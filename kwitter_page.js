//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCRlt21TvBB-xNFh3EZ-IwtvkOXTCPfoyA",
      authDomain: "kwitter-4a7a9.firebaseapp.com",
      databaseURL: "https://kwitter-4a7a9-default-rtdb.firebaseio.com",
      projectId: "kwitter-4a7a9",
      storageBucket: "kwitter-4a7a9.appspot.com",
      messagingSenderId: "774048569998",
      appId: "1:774048569998:web:a053bb83788c0e1bc607df"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var username = localStorage.getItem("username");
var roomname = localStorage.getItem("room_name");

function send(){
      var msg = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name: username,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
namee = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + namee + "<img class = 'user_tick' src = 'tick.png'> </h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button = "<button class = 'btn btn-warning' id = " + firebase_message_id +" value = " + like +" onclick = 'updatelike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updatelike(message_id){
     button_id = message_id;
     likes = document.getElementById(button_id).value;
     updated_likes = Number(likes) + 1;
     firebase.database().ref(roomname).child(message_id).update({
      like: updated_likes
});
}


function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
 }