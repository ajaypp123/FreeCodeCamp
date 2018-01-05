$(document).ready(function(){

	var wikiapi = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=";

	$("#search").on("click",function()
    {
		var txt = "";
		var s = $("#searchdata").val();
		var finalurl = wikiapi + s;

		$.ajax({
    		url: finalurl,
    		dataType: 'jsonp',
    		type: 'POST',
    		headers: {
      			'Api-User-Agent': 'Wekipedia/Search'
    		},
    		success: function(data) {
    			addr = data.query.search;
    			url  = "https://en.wikipedia.org/wiki/";

    			var x = 0;
    			for(x=0 ; x<addr.length; x++){
    				txt += "<div class='block'><a class='link' href='" + url + addr[x].title + "' target='_blank'>";
    				txt += "<span><strong>" + addr[x].title + "</strong><br>";
    				txt += addr[x].snippet + "</span></a></div>";
    			}

    			$(".wikidata").html(txt);
    		}
		});	
	});
});