
//Creating Firebase Presence to use with Google Maps



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