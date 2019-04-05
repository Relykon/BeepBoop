$(document).ready(function() {
  var beep = "Beep!";
  var boop = "Boop!";
  var dave = "I'm sorry Dave. I can't do that.";
  var x = dave.includes(3)

  $('form#beep').submit(function(event) {
    event.preventDefault();

    var num = $('input#number').val();
    console.log(num, 'line10')
    var result = toMessage(num);
    console.log(result, 'this is result')
    $('#result').text(result);

  });

    function toMessage(num) {
      console.log(num, 'num')
      // return invalid number if number is below 1
      if (isNaN(num) || num < 0) {
        return 'please enter a valid number'
      }

      var message = [];

      // while i is less than the num keep iterating through and push proper iteration
      for (i=0; i <= num; i++) {
        if (String(i).includes(3)) {
          message.push(dave);
        } else if (String(i).includes(2)) {
          message.push(boop);
        } else if (String(i).includes(1)){
          message.push(beep)
        } else {
          message.push(i)
        }
      }
      return message.join(", ");
    }
  });
