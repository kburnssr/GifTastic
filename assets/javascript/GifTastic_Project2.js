    var queryURL = "https://datazen.katren.ru/calendar/day/2018-06-09/";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response)
    });
