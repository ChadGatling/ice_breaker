
//Creating Firebase Presence to use with Google Maps

var user = firebase.auth().currentUser;


//Needs to go in head of html 
<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCK6hRlRpzJEd8RsN5hozVosxZalbgsQ0M",
    authDomain: "ice-breaker-app-165bd.firebaseapp.com",
    databaseURL: "https://ice-breaker-app-165bd.firebaseio.com",
    projectId: "ice-breaker-app-165bd",
    storageBucket: "ice-breaker-app-165bd.appspot.com",
    messagingSenderId: "673248316614"
  };
  firebase.initializeApp(config);


  //Sign up new users
  
  var email = $("#inputEmail3").val().trim();
  var password = $("#inputPassword3").val().trim();

  
  //Create a form that allows new users to register with your app using their email address and a password.
  //When a user completes the form, validate the email address and password provided by the user, 
  // then pass them to the createUserWithEmailAndPassword method:
  
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  


  //Sign in existing users
  
 // Create a form that allows existing users to sign in using their email address and password. 
 //When a user completes the form, call the signInWithEmailAndPassword method:
  
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  


  //If User signed in or not...User is global variable
  
  if (user) {
    // User is signed in.
    console.log("user signed in");
  } else {
    // No user is signed in.
    console.log("user not signed in");
  }

  //Get a user's profile
  //To get a user's profile information, use the properties of an instance of User. F
  
  
  var name, email, photoUrl, uid, emailVerified;
  
  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                     // this value to authenticate with your backend server, if
                     // you have one. Use User.getToken() instead.
  }
























// since I can connect from multiple devices or browser tabs, we store each connection instance separately
// any time that connectionsRef's value is null (i.e. has no children) I am offline

var myConnectionsRef = new Firebase(config.databaseURL + '/users/:id/connections');
// stores the timestamp of my last disconnect (the last time I was seen online)
var lastOnlineRef = new Firebase(config.databaseURL + '/users/:id/lastOnline');
var connectedRef = new Firebase(config.databaseURL + '/.info/connected');
connectedRef.on('value', function(snap) {
  if (snap.val() === true) {
    // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
    // add this device to my connections list
    // this value could contain info about the device or a timestamp too
    var con = myConnectionsRef.push(true);
    // when I disconnect, remove this device
    con.onDisconnect().remove();
    // when I disconnect, update the last time I was seen online
    lastOnlineRef.onDisconnect().set(Firebase.ServerValue.TIMESTAMP);
  }
});