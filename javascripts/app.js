var main = function () {
    "use strict";

    var requestURL = "https://graph.facebook.com/";

    var $input = $("<input>"),
    $button = $("<button>").text("Search");

    $("main .content").append(requestURL);	
    $("main .content").append($input).append($button);
    
    $button.on("click", function () {
    	if ($input.val() !== "") {
        	requestURL = requestURL + $input.val();
        	$input.val("");
 
		$.getJSON(requestURL, function(facebookResponse) {
			var $name = $("<p>");
			var $description = $("<p>");

			$name.text(facebookResponse.name);
			$description.text(facebookResponse.description);
			
			$("main .content").append($name, $description);
			requestURL = "https://graph.facebook.com/";
                });
        }
    });
};

$(document).ready(main);
