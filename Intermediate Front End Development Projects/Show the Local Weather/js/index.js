$(document).ready(function(){

	var appid = "930a6be4e53b19c238f2912df332b107";
	var lat = "";
	var lon = "";
	var add = "http://api.openweathermap.org/data/2.5/weather?";

	$("#fer").hide();
	
	//Find longitude and latitude
	if (navigator.geolocation) 
  	{
    	navigator.geolocation.getCurrentPosition(function(position)     
    	{
      		lat = position.coords.latitude ;
            lon = position.coords.longitude;
            add += "lat=" + lat + "&lon=" + lon + "&appid=" + appid + "&units=" ;
            creatURL(add, "metric");
    	});
  	}

	function creatURL(addr,un) 
	{
		addr = addr + un;

		var xhttp = new XMLHttpRequest();
		xhttp.open("GET", addr );

		xhttp.onload = function(){
			var data = JSON.parse(xhttp.responseText);
			printData(data, un);
		};
		xhttp.send();
	}

	function printData(data, uni) 
	{
		var txt = "";

		txt += "<div class='well'>"
		txt += "<div id='name'>" + data.name + " ," + data.sys.country + ".</div>";

		if(uni == "metric")
		{
			txt += "<div id='temp'>" + data.main.temp + " °C</div>";
		}else
		{
			txt += "<div id='temp'>" + data.main.temp + " °F</div>";
		}
		txt += "<div id='weather'>weather " + data.weather[0].main + "</div>";
		txt += "<div id='icon'>" + "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'</img>" + "</div>";
		txt += "</div>";

		$(".box").html(txt);
	}

	$("#cel").on("click", function(){
		creatURL(add, "imperial");
		$("#fer").show();
		$("#cel").hide();
	});

	$("#fer").on("click", function(){
		creatURL(add, "metric");
		$("#fer").hide();
		$("#cel").show();
	});

});