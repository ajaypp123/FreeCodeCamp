

$(document).ready(function(){

	var count = 0;
	var image1 = "";
	var image2 = "";
  var flag = 0;
  var player = "";
  var complayone = 5;
  
  $('#cross').click(function() {
  		image1 = '<img src="X.png" alt="cross">';
  		image2 = '<img src="O.png" alt="Zero">';
      player = "user";
      complayone = 2;
	});

	$('#zero').click(function() {
  		image1 = '<img src="O.png" alt="Zero">';
  		image2 = '<img src="X.png" alt="cross">';
      player = "computer";
      complayone = 1;
      play();

	});

	$('#reset').click(function() {
  		location.reload();

	});

  function resetall(){
    location.reload();
  }

  function draw()
  {
    if(count == 9){
        alert('Draw');
        resetall();
    }
  }

  $('#one').click(function() {             
    
      $('#one').html(image1);
      complayone = 1;
      document.getElementById("one").disabled = true;
      play();
  });

	$('#two').click(function() {
  		$('#two').html(image1);
      complayone = 1;
      document.getElementById("two").disabled = true;
      draw();
  		play();
	});

	$('#three').click(function() {
  		$('#three').html(image1);
      complayone = 1;
      document.getElementById("three").disabled = true;
  		play();
	});

	$('#four').click(function() {
  		$('#four').html(image1);
      complayone = 1;
      document.getElementById("four").disabled = true;
  		play();
	});

	$('#five').click(function() {
  		$('#five').html(image1);
      complayone = 1;
      document.getElementById("five").disabled = true;
  		play();
	});

	$('#six').click(function() {
  		$('#six').html(image1);
      complayone = 1;
      document.getElementById("six").disabled = true;
  		play();
	});

	$('#seven').click(function() {
		  $('#seven').html(image1);
      complayone = 1;
      document.getElementById("seven").disabled = true;
  		play();
	});

	$('#eight').click(function() {
  		$('#eight').html(image1);
      complayone = 1;
      document.getElementById("eight").disabled = true;
  		play();
	});

	$('#nine').click(function() {
  		$('#nine').html(image1);
      complayone = 1;
      document.getElementById("nine").disabled = true;
  		play();
	});


  function play(){
    draw();
    count++;
    if(count%2 == 1){
        chkwin('User Win Match')
      }

      if(count%2 == 0){
        chkwin('computer Win Match');
      }

      if(complayone == 1 && flag == 0)
      {
        complayone = 2;
        CompWinCheck();
      }
  }

  function chkwin(x){

    if($('#one').html() == $('#two').html() && $('#two').html() == $('#three').html())
    { 
      $('#one').css('background-color','yellow');
      $('#two').css('background-color','yellow');
      $('#three').css('background-color','yellow');
      flag = 1;
      alert(x); 
      setTimeout(resetall, 500);
    }

    if($('#four').html() == $('#five').html() && $('#four').html() == $('#six').html())
    { 
      $('#four').css('background-color','yellow');
      $('#five').css('background-color','yellow');
      $('#six').css('background-color','yellow');
      alert(x);
      flag = 1;
      setTimeout(resetall, 500);
    }

    if($('#seven').html() == $('#eight').html() && $('#eight').html() == $('#nine').html())
    { 
      $('#seven').css('background-color','yellow');
      $('#eight').css('background-color','yellow');
      $('#nine').css('background-color','yellow');
     alert(x);
     flag = 1;
     setTimeout(resetall, 500);
    }

    if($('#one').html() == $('#four').html() && $('#four').html() == $('#seven').html())
    { 
      $('#one').css('background-color','yellow');
      $('#four').css('background-color','yellow');
      $('#seven').css('background-color','yellow');
      alert(x);
      flag = 1;
      setTimeout(resetall, 500);
    }

    if($('#two').html() == $('#five').html() && $('#five').html() == $('#eight').html())
    { 
      $('#five').css('background-color','yellow');
      $('#two').css('background-color','yellow');
      $('#eight').css('background-color','yellow');
      alert(x);
      flag = 1;
      setTimeout(resetall, 500);
    }

    if($('#three').html() == $('#six').html() && $('#six').html() == $('#nine').html())
    { 
      $('#three').css('background-color','yellow');
      $('#six').css('background-color','yellow');
      $('#nine').css('background-color','yellow');
      flag = 1;
      alert(x);
      setTimeout(resetall, 500);
    }

    if($('#one').html() == $('#five').html() && $('#five').html() == $('#nine').html())
    { 
      $('#one').css('background-color','yellow');
      $('#five').css('background-color','yellow');
      $('#nine').css('background-color','yellow');
      flag = 1;
      alert(x);
      setTimeout(resetall, 500);
    }

    if($('#three').html() == $('#five').html() && $('#five').html() == $('#seven').html())
    { 
      $('#seven').css('background-color','yellow');
      $('#five').css('background-color','yellow');
      $('#three').css('background-color','yellow');
      flag = 1;
      alert(x);
      setTimeout(resetall, 500);
    }
  }






  function CompWinCheck()
 {
  //alert('comp');
  if($('#one').html() == $('#two').html() && $('#two').html() == image2 && $('#three').html() == '<p>3</p>' )
  {
      $('#three').html(image2);
      play();
  }
  else if($('#two').html() == $('#three').html() && $('#three').html() == image2 && $('#one').html() == '<p>1</p>')
  {
    $('#one').html(image2);
    play();
  }
  else if($('#four').html() == $('#five').html() && $('#five').html() == image2 && $('#six').html() == '<p>6</p>')
  {
    $('#six').html(image2);
    play();
  }
  else if($('#five').html() == $('#six').html() && $('#six').html() == image2 && $('#four').html() == '<p>4</p>')
  {
    $('#four').html(image2);
    play();
  }
  else if($('#seven').html() == $('#eight').html() && $('#eight').html() == image2 && $('#nine').html() == '<p>9</p>')
  {
    $('#nine').html(image2);
    play();
  }
  else if($('#eight').html() == $('#nine').html() && $('#nine').html() == image2 && $('#seven').html() == '<p>7</p>')
  {
    $('#seven').html(image2);
    play();
  }
  else if($('#one').html() == $('#five').html()  && $('#five').html() == image2 && $('#nine').html() == '<p>9</p>')
  {
    $('#nine').html(image2);
    play();
  }
  else if($('#five').html() == $('#nine').html() && $('#nine').html() == image2 && $('#one').html() == '<p>1</p>')
  {
    $('#one').html(image2);
    play();
  }
  else if($('#three').html() == $('#five').html() && $('#five').html() == image2 && $('#seven').html() == '<p>7</p>')
  {
    $('#seven').html(image2);
    play();
  }
  else if($('#seven').html() == $('#five').html() && $('#five').html() == image2 && $('#three').html() == '<p>3</p>')
  {
    $('#three').html(image2);
    play();
  }
  else if($('#one').html() == $('#three').html() && $('#three').html() == image2 && $('#two').html() == '<p>2</p>')
  {
    $('#two').html(image2);
    play();
  }
  else if($('#four').html() == $('#six').html() && $('#six').html() == image2 && $('#five').html() == '<p>5</p>')
  {
    $('#five').html(image2);
    play();
  }
  else if($('#seven').html() == $('#nine').html()  && $('#nine').html() == image2 && $('#eight').html() == '<p>8</p>')
  {
    $('#eight').html(image2);
    play();
  }
  else if($('#one').html() == $('#seven').html() && $('#seven').html() == image2 &&  $('#four').html() == '<p>4</p>')
  {
    $('#four').html(image2);
    play();
  }
  else if($('#two').html() == $('#eight').html()  && $('#eight').html() == image2 &&   $('#five').html() == '<p>5</p>')
  {
    $('#five').html(image2);
    play();
  }
  else if($('#three').html() == $('#nine').html()  && $('#nine').html() == image2 &&   $('#six').html() == '<p>6</p>')
  {
    $('#six').html(image2);
    play();
  }
  else if($('#one').html() == $('#five').html()  && $('#five').html() == image2 &&   $('#nine').html() == '<p>7</p>')
  {
    $('#nine').html(image2);
    play();
  }
  else if($('#four').html() == $('#seven').html()  && $('#seven').html() == image2 &&   $('#one').html() == '<p>1</p>')
  {
    $('#one').html(image2);
    play();
  }
  else if($('#five').html() == $('#eight').html()  && $('#eight').html() == image2 &&   $('#two').html() == '<p>2</p>')
  {
    $('#two').html(image2);
    play();
  }
  else if($('#six').html() == $('#nine').html()  && $('#nine').html() == image2 &&   $('#three').html() == '<p>3</p>')
  {
    $('#three').html(image2);
    play();
  }
  else if($('#one').html() == $('#four').html()  && $('#four').html() == image2 &&   $('#seven').html() == '<p>7</p>')
  {
    $('#seven').html(image2);
    play();
  }
  else if($('#two').html() == $('#five').html() && $('#five').html() == image2 &&  $('#eight').html() == '<p>8</p>')
  {
    $('#eight').html(image2);
    play();
  }
  else if($('#three').html() == $('#six').html()  && $('#six').html() == image2 &&  $('#nine').html() == '<p>9</p>')
  {
    $('#nine').html(image2);
    play();
  }
  else if($('#one').html() == $('#nine').html()  && $('#nine').html() == image2 &&  $('#five').html() == '<p>5</p>')
  {
    $('#five').html(image2);
    play();
  }
  else if($('#three').html() == $('#seven').html()  && $('#seven').html() == image2 &&  $('#five').html() == '<p>5</p>')
  {
    $('#five').html(image2);
    play();
  }
  else
  {
    AI();
  }
}

function AI()
{
  if($('#five').html() == '<p>5</p>')
  {
    $('#five').html(image2);
    play();
  }
  else if($('#one').html() == '<p>1</p>')
  {
    $('#one').html(image2);
    play();
  }
  else if($('#nine').html() == '<p>9</p>')
  {
    $('#nine').html(image2);
    play();
  }
  else if($('#six').html() == '<p>6</p>')
  {
    $('#six').html(image2);
    play();
  }
  else if($('#two').html() == '<p>2</p>')
  {
    $('#two').html(image2);
    play();
  }
  else if($('#eight').html() == '<p>8</p>')
  {
    $('#eight').html(image2);
    play();
  }
  else if($('#three').html() == '<p>3</p>')
  {
    $('#three').html(image2);
    play();
  }
  else if($('#seven').html() == '<p>7</p>')
  {
    $('#seven').html(image2);
    play();
  }
  else if($('#four').html() == '<p>4</p>')
  {
    $('#four').html(image2);
    play();
  }
}

});
