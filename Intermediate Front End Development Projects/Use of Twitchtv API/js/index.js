$(document).ready(function(){

	var freeCodeCampTwitchAPI = "https://api.twitch.tv/kraken/streams/freecodecamp";
	var follower = [];
    var logo = "";
    var status = "";
    var followerName = "";
    var txt = "";

    $("#showall").click(function(){
        $(".online").show();
        $(".offline").show();
    });
	
    $("#showonline").click(function(){
        $(".online").show();
        $(".offline").hide();
    });

    $("#showoffline").click(function(){
        $(".online").hide();
        $(".offline").show();
    });

    $("#searchbtn").click(function(){
        n = $("#search").val();
        $(".offline").hide();
        $(".online").hide();
        $('#' + n).show();
    });

    $.ajax
    ({
        url: freeCodeCampTwitchAPI,
        dataType: 'json',
        type: 'GET',
        headers: {
            'Client-ID': '7ajuvfgl7gd6uvev9jtoep8uwn7icc'
        },
        success: function(data) {

            if(data.stream === null){
                $("#fccstatus").html("Free Code Camp is OFFLINE");
            }
            else{
                $("#fccstatus").html("Free Code Camp is ONLINE");
            }
        }
    });

    $.ajax({
        type: "GET",

        url: "https://api.twitch.tv/kraken/users/ajayparatmandali/follows/channels/",
        headers: {
            'Client-ID': '7ajuvfgl7gd6uvev9jtoep8uwn7icc'
        },
        success: function(data2) {
            
            for(var i = 0; i < data2.follows.length; i++)
            {

                name = data2.follows[i].channel.name;

                if (logo == null) {
                    logo = "https://bermudians.files.wordpress.com/2013/09/am-a-19-year-old-multimedia-artist-student-from-manila-21.png";
                }

                var followerUrl = "https://api.twitch.tv/kraken/streams/" + name ;

                $.ajax
                ({
                    url: followerUrl,
                    dataType: 'json',
                    type: 'GET',
                    headers: {
                        'Client-ID': '7ajuvfgl7gd6uvev9jtoep8uwn7icc'
                    },
                    success: function(data3) {

                        if(data3.stream != null)
                        {
                            follower.push(data3.stream.channel.display_name);
                            logo = data3.stream.channel.logo;
                            followerName = data3.stream.channel.display_name;
                            status = data3.stream.channel.status;

                            txt = "<div class='view row online' id='" + followerName + "'><a class='link' href='https://www.twitch.tv/" + followerName + "' target='_blank'>" ;
                            txt += "<div class='col-md-4'><img class='imagelogo' src='" + logo + "'></div>";
                            txt += "<div class='col-md-4'>" + followerName + "</div>";
                            txt += "<div class='col-md-4'>" + status + "</div></a>";
                            txt += "</div>" ;
                            $(".follower").append(txt); 
                        }
                    }
                });    
            }
            offline();
        }
    });

    function offline(){
        $.ajax({
            type: "GET",

            url: "https://api.twitch.tv/kraken/users/ajayparatmandali/follows/channels/",
            headers: {
                'Client-ID': '7ajuvfgl7gd6uvev9jtoep8uwn7icc'
            },
            success: function(data4) {
                
                for(var i = 0; i < data4.follows.length; i++)
                {

                    if (logo == null) {
                        logo = "https://bermudians.files.wordpress.com/2013/09/am-a-19-year-old-multimedia-artist-student-from-manila-21.png";
                    }

                    followerName = data4.follows[i].channel.display_name;

                    if (jQuery.inArray(followerName, follower) == '-1')
                    {
                        logo = data4.follows[i].channel.logo;
                        status = "OFFLINE";

                        txt = "<div class='view row offline' id='" + followerName + "'><a class='link' href='https://www.twitch.tv/" + followerName + "' target='_blank'>" ;
                        txt += "<div class='col-md-4'><img class='imagelogo' src='" + logo + "'></div>";
                        txt += "<div class='col-md-4'>" + followerName + "</div>";
                        txt += "<div class='col-md-4'>" + status + "</div></a>";
                        txt += "</div>" ;
                        $(".follower").append(txt);  
                    }      
                }
            }
        });
    }
    
});