$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyCr28DYvdwMnveEB_vtZPvGbzga6qLPTJk",
        authDomain: "train-edc73.firebaseapp.com",
        databaseURL: "https://train-edc73.firebaseio.com",
        projectId: "train-edc73",
        storageBucket: "",
        messagingSenderId: "225453518411"
    };
    firebase.initializeApp(config);

    let database = firebase.database();

    //Variables 
    //***********************************

    let name = "";
    let destination = "";
    let first = "";
    let frequency = 0;



    //Capture Button Click  
    //***********************************

    $("#submit").on("click", function (event) {
        event.preventDefault();

        //Grab values from form 
        //***********************************

        let name = $("#name-input").val().trim();
        let destination = $("#destination-input").val().trim();
        let first = $("#first-input").val().trim();
        let frequency = $("#frequency-input").val().trim();

        //Push to firebase  
        //***********************************

        database.ref("/trains").push({
            name: name,
            destination: destination,
            first: first,
            frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    });


    //Firebase watcher .on("child_added")  
    //***********************************

    database.ref("/trains").on("child_added", function (snapshot) {

        //storing snapshot.val() in a variable for convenience
        let sv = snapshot.val();      
    
    
    })











}); //doc ready