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
  var message = [];

  if (isNaN(num) || num < 0) {
    return 'please enter a valid number';
  }

  for (i=0; i <= num; i++) {
    if (String(i).includes(3)) {
      message.push("I'm sorry Dave. I'm afraid can't do that.");
    } else if (String(i).includes(2)) {
        message.push("Boop!");
    } else if (String(i).includes(1)) {
      message.push("Beep!");
    } else {
      message.push(i);
    }
  }
  return message.join(", ");
}
