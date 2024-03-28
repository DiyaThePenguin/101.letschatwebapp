const firebaseConfig = {
    apiKey: "AIzaSyDrnioj2S0mjBm3zfP4PgemWb85SshTA-4",
    authDomain: "letschatwebapp-f92c6.firebaseapp.com",
    databaseURL: "https://letschatwebapp-f92c6-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-f92c6",
    storageBucket: "letschatwebapp-f92c6.appspot.com",
    messagingSenderId: "616031419498",
    appId: "1:616031419498:web:facbf216fe3b88fee89e13"
  };
firebase.initializeApp(firebaseConfig);
var username= localStorage.getItem("username")
document.getElementById("welcome").innerHTML="Welcome, " + username;


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



