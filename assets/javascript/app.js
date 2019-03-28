var config = {
    apiKey: "AIzaSyD51f3xMJAhrAzISTXXKhT1ZpeYCUteiiQ",
    authDomain: "train-time-6117c.firebaseapp.com",
    databaseURL: "https://train-time-6117c.firebaseio.com",
    projectId: "train-time-6117c",
    storageBucket: "train-time-6117c.appspot.com",
    messagingSenderId: "916025088668"
};
firebase.initializeApp(config);
var database = firebase.database();

database.ref().on("child_added", function (childSnapshot) {
    var children = [
        childSnapshot.val().minsAway,
        childSnapshot.val().nextArrival,
        childSnapshot.val().frequency,
        childSnapshot.val().destination,
        childSnapshot.val().trainName
    ]

    var newRow = $('<tr>');
    $('#table').append(newRow);

    for (var i = 0; i < children.length; i++) {
        var newCol = $('<td>');
        newCol.text(children[i]);
        newRow.prepend(newCol);
    }

});


$('button').on('click', function (event) {
    event.preventDefault();

    var frequency = parseInt($('#frequency').val().trim());
    var trainTime = $('#train-time').val().trim();
    var firstTimeConverted = moment(trainTime, "HH:mm");
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    var tRemainder = diffTime % frequency;
    var minsAway = frequency - tRemainder;
    var nextArrival = moment().add(minsAway, "minutes").format("hh:mm");
    var colList = [
        trainName = $('#train-name').val().trim(),
        destination = $('#destination').val().trim(),
        frequency,
        nextArrival,
        minsAway
    ]

    database.ref().push({
        trainName: trainName,
        destination: destination,
        frequency: frequency,
        nextArrival: nextArrival,
        minsAway: minsAway

    })

    $('form :input').val('');
});