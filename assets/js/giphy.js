// to maker sure the dom is ready before anything else & making sure it shows up on the console
// great place to start
$( document ).ready(function() {
    console.log( "ready!" );
});



var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=ti59k5SAoYM0q2oy34i4oQmX7V8T39Qc";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});