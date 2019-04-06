# Beep! Boop!

#### A program that allows users to input a number and convert it to random messages 04/04/19

#### By ** Kyle Harrington**

## Description

A website created with HTML, CSS/Bootstrap, JS/JQuery where a user can input a number and it will be converted to pre-determined messages.


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses localhost:5004 | Homepage with user input form |
| **Does nothing to non numeric characters** | User input: "abcd" | Output: "alert" |
| **Returns a range of numbers from 0 to the users inputted number**| User Input: "5" | Output: "0, 1, 2, 3, 4, 5" |
| **Converts numbers containing a "1" to "Beep!"**| Input: "1" | Output: "Beep" |
| **Converts numbers containing a "2" to "Boop!", with precedence over "1s"** | Input: "2" | Output: "'Beep!', 'Boop!'" |
| **Converts numbers containing a "3" to "I'm sorry Dave. I'm afraid I can't do that"**| Input: "3" | Output: "'0', 'Beep!', 'Boop!', 'I'm sorry Dave...' " |
| **Prioritizes conversion rule for numbers containing a 2 over number 1**| Input: "12" | Output: "'0...9,''Beep!', 'Beep!', 'Boop!'" |
| **Prioritizes conversion rule for numbers containing a 3 over number 2 & 1**| Input: "32" | Output: "'0...30,' 'I'm sorry dave...', 'I'm sorry dave...'" |

## Setup/Installation Requirements


1. Clone this repository: https://github.com/Relykon/BeepBoop.git
4. Open the index.html file in your browser of choice.
5. On your browser, navigate to https://relykon.github.io/BeepBoop/ and enjoy!

## Known Bugs
* No known bugs at this time.

## Technologies Used
* HTML
* CSS
  * Bootstrap
* JavaScript
  * jQuery

## Support and contact details

_Email us with any questions, comments, or concerns. Contact Kyle @ harrington.kyle@gmail.com _

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2019**_{Kyle Harrington}
