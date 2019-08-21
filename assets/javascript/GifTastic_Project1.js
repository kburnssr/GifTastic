
$(document).on('click', 'button', function () {
    console.log($(this).text());
    var u = $(this).text();
    var queryURL = "https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/search?q=" + u + "&api_key=0o1SOSf8mRtfUcrTSZllUuybBlv4W0jE&limit=10&rating=PG";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            var el = $("<img src='" + response.data[i].images.original_still.url +
                "' alt-src='" + response.data[i].images.original.url + "' width='100'/>");
            var div = $("<div><br>" + response.data[i].rating + "</div>");
            div.prepend(el);
            $("#storedGifs").prepend(div);
            el.on('mousedown', function (event) {
                var src = $(event.target).attr("src");
                var alt = $(event.target).attr("alt-src");
                $(event.target).attr("src", alt);
                $(event.target).attr("alt-src", src);
            });
        }
    });
});
$("input[type='submit']").on('click', function (event) {
    event.preventDefault(); 
    var ans = $("input[name='animal']").val();
    console.log(ans);
    var b = $('<button>');
    b.text(ans);
    $('#animalButtons').prepend(b);
});