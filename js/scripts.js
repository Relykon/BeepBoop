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

//// if the number has 1 2 or 3 in it
      if (num.includes(3)) {
        return dave;
      }
      if (num.includes(2)) {
        return boop;
      }
      if (num.includes(1)) {
        return beep;
      }
    }

///
      // if (num === 3) {
      //   return dave;
      // } else if (num === 2) {
      //   return boop;
      // } else if (num === 1) {
      //   return beep;
      // }
      //






        // var messageSet = {
        //   3: "Beep!",
        //   2: "Boop!",
        //   1: "I'm Sorry Dave. I can't do that."
        // };
        // var message = "";
        //
        // for (var key in messageSet) {
        //   while (num >= messageSet[key]) {
        //     message += key;
        //     num -= messageSet[key];
        //   }
        // }
        // return message;
        // }
    });
