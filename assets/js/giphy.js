// to maker sure the dom is ready before anything else & making sure it shows up on the console
// great place to start
$(document).ready(function () {
    console.log("ready!");




    var bts = ["BTS", "Kim Seok Jin", "Min Yoongi", "J-Hope", "RM", "Park Jimin", "Kim Taehyung", "Jeon Jungkook"];

    function showButtons() {
        $("#button").empty();

        for (var i = 0; i < bts.length; i++) {
            var group = $("<button>");

            group.addClass("kpop");
            group.attr("data-name", bts[i]);
            group.text(bts[i]);
            $("#display-buttons").append(group);
        }
    };


    $("#add-group").on("click", function (event) {
        event.preventDefault();
        //added this line to empty the div before displaying the array...
        $("#display-buttons").empty()

        var kpop = $("#kpop").val().trim();
        console.log(kpop)
        console.log(bts)
        bts.push(kpop);

        showButtons();
    });

    showButtons();



    $(document).on("click", ".kpop", function () {
        console.log("clicked")
        // I changed the data-kpop to data-name which is the attr of you dynamically created buttons
        var kpop = $(this).attr("data-name");
        console.log(kpop)
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            kpop + "&api_key=ti59k5SAoYM0q2oy34i4oQmX7V8T39Qc&limit=10";

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

                    var kpop = $("<img>").addClass("gif");

                    kpop.attr("data-state", "still");
                    kpop.attr("data-still", results[i].images.fixed_height_still.url);
                    kpop.attr("src", results[i].images.fixed_height_still.url);
                    kpop.attr("data-animate", results[i].images.fixed_height.url);

                    kpopDiv.append(p);
                    kpopDiv.append(kpop);

                    $("#kpopHere").prepend(kpopDiv);
                };

            });
    });

    // I moved this blocked of code from inside the click button to out side
    //also, I change you the Jquery to $(document) since your gifs were created dynamically.
    $(document).on("click", ".gif", function () {
        var state = $(this).attr("data-state");
        console.log(state)

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

});