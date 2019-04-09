$(document).ready(function() {
  $('form#beep').submit(function(event) {
    event.preventDefault();
    $("#Hal").show();

    var num = $('input#number').val();
    var result = toMessage(num);
    $('#result').text(result);
  });
});

function toMessage(num) {
  var beep = "Beep!";
  var boop = "Boop!";
  var dave = "I'm sorry Dave. I'm afraid can't do that.";
  var message = [];

  if (isNaN(num) || num < 0) {
    return 'please enter a valid number';
  }

  for (i=0; i <= num; i++) {
    if (String(i).includes(3)) {
      message.push(dave);
    } else if (String(i).includes(2)) {
      message.push(boop);
    } else if (String(i).includes(1)) {
      message.push(beep);
    } else {
      message.push(i);
    }
  }
  return message.join(", ");
}
