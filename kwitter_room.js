
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
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
    user_name = localStorage.getItem("username"); 
    document.getElementById("username").innerHTML = "Welcome " + user_name + "!";
    
    
    function addroom(){
          room_name = document.getElementById("room_name").value;
    
          firebase.database().ref("/").child(room_name).update({
               purpose : "adding room name"
          });
    
          localStorage.setItem("room_name",room_name);
    
          window.location = "kwitter_page.html";
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirecttohomepage(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
   });});}
getData();


function redirecttohomepage(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
     localStorage.removeItem("username");
     localStorage.removeItem("room_name");
     window.location = "index.html";
}