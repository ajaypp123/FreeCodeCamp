$(document).ready(function(){

	var count = 0;

	$("#twite").on("click",function()
	{
		var message = $("#quote").html();
		message += " " + $("#author").html() + " #quote";
		var shareurl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(message);
		sharecore(shareurl);
	});

	$("#nxtQuote").on("click",function()
	{
		count = randomRange(0, 70);		//Return Random number

		var xhttp = new XMLHttpRequest();
		xhttp.open("GET","https://raw.githubusercontent.com/ajaypp123/FreeCodeCamp-Front_End_Development_Certification/master/Intermediate%20Front%20End%20Development%20Projects/Random%20Quote%20Generator/json/quotes.json");

		xhttp.onload = function(){
			var data = JSON.parse(xhttp.responseText);
			printData(data, count);
		};
		xhttp.send();
	});
});

function printData(data, count) 
{
	var txt = "";

	txt += "<div><q id='quote'>" + data[count].quoteText + "</q></div>"
	txt += "<div id='author'> - by " + data[count].quoteAuthor + "</div>";

	$(".quotedata").html(txt);
}

function randomRange(Min, Max) 
{
	return Math.floor(Math.random() * (Max - Min + 1)) + Min;
}

function sharecore(shareurl) {
	var newpage = window.open(shareurl,'_blank');
	if (newpage) 
	{ 
		newpage.focus(); 
	} // new window opened successfully
	else 
	{ 
		window.location = shareurl; 
	} // browser blocked the new window, so redirect the current window instead
}
