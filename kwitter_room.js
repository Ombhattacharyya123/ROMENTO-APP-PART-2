const firebaseConfig = {
    apiKey: "AIzaSyCqmT5GiqKxNTRVyQ1SEVF3-1FUiEFjwO8",
    authDomain: "romento-social-center.firebaseapp.com",
    projectId: "romento-social-center",
    storageBucket: "romento-social-center.appspot.com",
    messagingSenderId: "769125013055",
    appId: "1:769125013055:web:544981f3b2217f2bf78a8a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";