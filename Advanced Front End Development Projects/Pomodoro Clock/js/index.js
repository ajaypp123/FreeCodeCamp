
$workT = $('#work-time');
$sessionT = $('#timer');
$minutes = $('#min');
$hours = $('#hour');
$breakT = $('#break-time');
$seconds = $('#sec');
$status = $('#status');

var padzeros = function(value) {

  return ('00' + value).slice(-2);

};

var addTime = function(section) {

  section.text(+section.text() + 1);
  var min = +section.text() % 60;
  var hour = +$hours.text();

  if (+section.text() < 60) {

    $minutes.text(padzeros(section.text()));

    if (min === 0 && hour > 1) {

      $hours.text(padzeros(hour - 1));

    }
  }

  if (+section.text() >= 60) {

    if (min === 0) {

      hour++;
      $hours.text(padzeros(hour));
    }

    $minutes.text(padzeros(min));
  }
};

var subTime = function(section) {

  if (+section.text() > 1) {
    section.text(+section.text() - 1);
    var min = +section.text() % 60;
    var hour = +$hours.text();

    if (+section.text() < 60) {
      $minutes.text(padzeros(min));
      if (min !== 0 && hour >= 1) {
        $hours.text(padzeros(hour - 1));
      }

    }

    if (section.text() >= 60) {
      $minutes.text(padzeros(min));
      if (min === 0 && hour > 1) {
        $hours.text(padzeros(hour - 1));
      }
    }
  }
};


$('#minus').click(function() {
  $status.text('Break!');
  subTime($breakT);
});

$('#plus').click(function() {
  $status.text('Break!');
  addTime($breakT);
});

// Controls for Session Length
$('#minus2').click(function() {
  $status.text('Work!');
  subTime($workT);
});

$('#plus2').click(function() {
  $status.text('Work!');
  addTime($workT);
});

working = false;

$('#start').click(function() {

  var timerId;
  var hours = +$hours.text();
  var minutes = +$minutes.text();
  var seconds = +$seconds.text();

  function clockStart() {
    timerId = setInterval(update, 1000);
    working = true;
    update();
  }

  function clockStop() {
    clearInterval(timerId);
    timerId = null;
    working = false;
  }

  var audio = new Audio('http://soundbible.com/grab.php?id=1377&type=mp3');

  function beep() {

    audio.play();
  }

  function update() {

    if (hours > 0 && minutes === 0) {
      hours--;
    }

    document.getElementById('hour').innerHTML = padzeros(hours);

    if (minutes > 0 && seconds === 0) {
      minutes--;
    }

    document.getElementById('min').innerHTML = padzeros(minutes);

    if (seconds === 0) {
      seconds = 60;
    }

    if (seconds > 0) {
      seconds--;
    }

    document.getElementById('sec').innerHTML = padzeros(seconds);

    if (hours === 0 && minutes === 0 && seconds === 0 && $status.text() === 'Work!') {
      beep();
      $status.text('Break!');
      minutes = +$breakT.text();
      $breakT.text(+$breakT.text() - 1);
      addTime($breakT);
    } else if (hours === 0 && minutes === 0 && seconds === 0 && $status.text() === 'Break!') {
      beep();
      $status.text('Work!');
      minutes = +$workT.text();
      $workT.text(+$workT.text() - 1);
      addTime($workT);
    }

  }

  if (working === true) {
    return;
  }

  clockStart();

  $('#pause').click(function() {
    clockStop();
  });

  $('#clear').click(function() {
    clockStop();
    $workT.text($workT.text() - 1);
    addTime($workT);
    $hours.text('00');
    $seconds.text('00');

  });

});