Text remaining twitter

var tweet = prompt("Compose your twwet");
var tweetUnder140 = tweet.slice(0,141);
alert(tweetUnder140);

//or
alert(prompt("Compose your tweet").slice(0,141));

//1. create name from prompt
var name = prompt("what is your name?");
//2. capital the first letter on their name

//a. isolate the first char
var firstChar = name.slice(0,1);

//b. turn the first char to upperCaseFirstChar
var upperCaseFirstChar = firstChar.toUpperCase();

//c. isolate the rest of the name
var restOfName = name.slice(1,name.length);
// change restofname to lower
restOfName = restOfName.toLowerCase();

//d. concactenate the first char with the rest of char
var capitalisedName = upperCaseFirstChar + restOfName;

// cek dog age
var dogAge = prompt("How old are odg?")
var humanAge = ((dogAge - 2) * 4) + 21;
alert ("your dog is " + humanAge + " years old in human years");

//3. we the capitalized version of their name to greet
alert("Hello " + capitalisedName)
