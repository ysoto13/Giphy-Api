// to maker sure the dom is ready before anything else & making sure it shows up on the console
// great place to start
$(document).ready(function () {
    console.log("ready!");




var bts = ["BTS", "A.R.M.Y", "Jin", "SUGA", "J-Hope", "RM", "Jimin", "V", "JungKook"];

function showButtons() {
    $("#button").empty();

    for (var i = 0; i < bts.length; i++) {
        var group = $("<button>");

        group.addClass("kpop");
        group.attr("data-name", bts[i]);
        group.text(bts[i]);
        $("#button").append(group);
    }
};


$("#add-group").on("click", function (event) {
    event.preventDefault();

    var kpop = $("#kpop").val().trim();

    bts.push(kpop);

    showButtons();
});

showButtons();



$("button").on("click", function () {
    console.log("clicked")
    var kpop = $(this).attr("data-kpop");
    console.log(kpop)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        kpop + "&api_key=ti59k5SAoYM0q2oy34i4oQmX7V8T39Qc&limit=5";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var kpopDiv = $("<div>");

                rating = results[i].rating;

                var p = $("<p>").text("Rating: " + results[i].rating);

                var kpopImage = $("<img>");
                kpopImage.attr("src", results[i].images.fixed_height.url);

                kpopDiv.append(p);
                kpopDiv.append(kpopImage);

                $("#kpopHere").prepend(kpopDiv);
            }
        });
});


$(".gif").on("click", function () {
    var state = $(this).attr("data-state");
    
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });



});