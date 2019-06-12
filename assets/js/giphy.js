// to maker sure the dom is ready before anything else & making sure it shows up on the console
// great place to start
$(document).ready(function () {
    console.log("ready!");
});


var bts = ["BTS", "A.R.M.Y", "Jin", "SUGA", "J-Hope", "RM", "Jimin", "V", "JungKook"];

function showButtons() {
    $("#button").empty();

    for (var i = 0; i < bts.length; i++) {
        var group = $("<button>");

        group.addClass("kpop");
        group.attr("data-name", bts[i]);
        group.text(bts[i]);
        $("#buttons-buttons").append(group);
    }
};


$("#add-group").on("click", function (event) {
    event.preventDefault();

    var kpop = $("#kpop").val().trim();


    bts.push(kpop);

    showButtons();
});

showButtons();



$("button").on("click", function() {
    var kpop = $(this).attr("data-kpop");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      kpop + "&limit=10&api_key=ti59k5SAoYM0q2oy34i4oQmX7V8T39Qc";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var btsGiph = response.data;

        for (var i = 0; i < btsGiph.length; i++) {
          var kpopDiv = $("<div>");

          var rating = btsGiph[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var kpopImage = $("<img>");
          kpopImage.attr("src", btsGiph[i].images.fixed_height.url);

          kpopDiv.prepend(p);
          kpopDiv.prepend(kpopImage);

          $("#kpopHere").prepend(kpopDiv);
        }
      });
  });
