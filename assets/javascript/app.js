// Initialize Firebase
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

//  updating browser from firebase
//   database.ref.on("child_added", function (childsnapshot){

//   });

$('button').on('click', function (event) {
    event.preventDefault();

    var colList = [
         trainName = $('#train-name').val().trim() ,
         destination = $('#destination').val().trim(),
         trainTime = parseInt($('#train-time').val().trim()),
         frequency = parseInt($('#frequency').val().trim())

    ]
    // var trainName = $('#train-name').val().trim();
    // var destination = $('#destination').val().trim();
    // var trainTime = parseInt($('#train-time').val().trim());
    // var frequency = parseInt($('#frequency').val().trim());
    console.log(colList[i]);
    var newRow = $('<tr>');
    newRow.attr('class', "table-row");
    
    $('#table').append(newRow);
    for (var i = 0; i < colList.length; i++) {
        var newCol = $('<td>');
        newCol.text(colList[i]);
        $('.table-row').append(newCol);

    }


});