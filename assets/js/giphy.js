// to maker sure the dom is ready before anything else & making sure it shows up on the console
// great place to start
$(document).ready(function () {
    console.log("ready!");
});


var bts = ["BTS", "A.R.M.Y", "Jin", "SUGA", "J-Hope", "RM", "Jimin", "V", "JungKook"];

function showButtons() {
    $("#buttons-buttons").empty();

    for (var i = 0; i < bts.length; i++) {
        var group = $("<button>");
        group.addClass("kpop");

        // addinig attr??
        group.attr("data-name", bts[i]);
        group.text(bts[i]);
        $("#buttons-buttons").append(group);
    }
}





// This function handles events where one button is clicked
$("#add-kpop").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var kpop = $("#kpop-input").val().trim();
    // The movie from the textbox is then added to our array
    bts.push(kpop);

    // calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Calling the renderButtons function at least once to display the initial list of movies
  renderButtons();






// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=ti59k5SAoYM0q2oy34i4oQmX7V8T39Qc";

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);
// });