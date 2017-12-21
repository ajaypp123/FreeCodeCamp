/*calculator*/

$(document).ready(function(){
    
    $('#clear').click(function() {
  		$('#str').val('');
	});

	$('#open').click(function() {
  		$('#str').val($('#str').val() + '(');
	});

	$('#close').click(function() {
  		$('#str').val($('#str').val() + ')');
	});

	$('#mod').click(function() {
  		$('#str').val($('#str').val() + '%');
	});

	$('#one').click(function() {
  		$('#str').val($('#str').val() + '1');
	});

	$('#two').click(function() {
  		$('#str').val($('#str').val() + '2');
	});

	$('#three').click(function() {
  		$('#str').val($('#str').val() + '3');
	});

	$('#plus').click(function() {
  		$('#str').val($('#str').val() + '+');
	});

	$('#four').click(function() {
  		$('#str').val($('#str').val() + '4');
	});

	$('#five').click(function() {
  		$('#str').val($('#str').val() + '5');
	});

	$('#six').click(function() {
  		$('#str').val($('#str').val() + '6');
	});

	$('#min').click(function() {
  		$('#str').val($('#str').val() + '-');
	});

	$('#seven').click(function() {
  		$('#str').val($('#str').val() + '7');
	});

	$('#eight').click(function() {
  		$('#str').val($('#str').val() + '8');
	});

	$('#nine').click(function() {
  		$('#str').val($('#str').val() + '9');
	});

	$('#multi').click(function() {
  		$('#str').val($('#str').val() + '*');
	});

	$('#dot').click(function() {
  		$('#str').val($('#str').val() + '.');
	});

	$('#zero').click(function() {
  		$('#str').val($('#str').val() + '0');
	});

	$('#ans').click(function() {
  		$('#str').val(eval($('#str').val()));
	});

	$('#devide').click(function() {
  		$('#str').val($('#str').val() + '/');
	});


});


