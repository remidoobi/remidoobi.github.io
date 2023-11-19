var quoteArray = [
  ["What is the thing that can't be replaced if your appartment would burn?"],
  ["Do you think that we are the most advanced civilisation that Earth ever carried?"],
  ["When is your birthday?\n Do you belive in zodiac signs?\n Which are the most accurate chinese or classics?"],
  ["Do you keep track of a wish list or a list of things you'd like to have?"],
  ["You can pick one superpower, which one would you?\n "With big powers come big responsabilities", what do you do with this super power?"],
  ["Do you own a costumes box?"],
  ["What do you do in life that is not in your resume?"],
  ["If money was not an issue, what would you do?"],
  ["Do you belive in reincarnation?"],
  ["Did you ever face a corpse?"],
  ["Who would you have dinner with if you could pick a dead, alive or imaginary person?"],
  ["Could you become vegetarian?\nVegan?"],
  ["Do you think we can get ride of the cars?\nWhat would that involve for the society?"],
  ["If you put yourself in 1 year, what would be the title and the main lines of the article?"],
  ["Did you experience illegal substences? What do you keep from that?"],
  ["What kind of death scares you most?"],
  ["If you could change the year of your birth which would you pick?"],
  ["Do you belive ghosts exists? What about aliens?"],
  ["How long will it take for our civilization to collapse? What would you do if we are still alive when it happens?"],
  ["Do you think we can stop the global warming? Will we?"],
  ["Dog or cat?"],
  ["Phò or Ramen?"],
  ["Did you ever had a pet? What was it? What was it's name?"]
  ["What does it mean for you to be a feminist? Can you search and read the definition of it? Do you relate to it?"],
  ["Would you use a selfdriving car without human driver? Without pedals and steering wheel?"],
  ["What is the hardest habits you decided to get ride of? Why ? Do you still stand it?"],
  ["Which seat do you usualy pick: window or aisle?"],
  ["Unlock your phone and tell me what are your three last app open."],
  ["Do you have a specific practice to peel fruits?"],
  ["Are you a morning person?"],
  ["Blue pill or red pill? [You take the blue pill—the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill—you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember: all I'm offering is the truth. Nothing more.]"],
  ["Did you ever made a trip only by yourself? Where was it? How long did it last? Is there any reasons that made you go by yourself?"],
  ["What is your favortie picture of you when your were very young?"],
  ["We all did stupid things. What is the stupidest things you did?"],
  ["According to you, what was the most decisive moment of your life?"],
  ["Should sex be at the Olympics? What could be the related events?"],
  ["Do you prefer to get the information that you have 5 years to live or have 10 years to live but not knowing when it will end."],
  ["Do you have/had nicknames or short names? Who gave you them? Did you like being called that way?"],
  ["How do you organise your phone's apps icones?"],
  ["You can choose one thing that will become free for everyone on earth, what would you pick? And one thing only free for you?"],
  ["Open WhatsApp and show what are the emoji on the first line of "recently used". What is your favorite emoji ? "],
  ["What if things you said No to had been Yes?"],
  ["What is your favorite sleeping outfit?"],
  ["What people use to say about you when you were a kid?"],
  ["Where and when were you last holidays? How was it?"],
  ["Do you remember the first contact you had with the Internet?"],
  ["What are your favorite shoes?"],
  ["Do you own a library card?"],
  ["What is your morning routine?"],
  ["Do you clean and tidy your appartment before going on holidays? Why?"],
  ["Are you a snooze person?"],
  ["Do you prefer to stop eating cheese or stop having sex?"],
  ["Imagine sex doesn't exist. A startup comes up with the concept. Imagine the pitch."],
  ["Who should play your role in the biopic of your life?"],
  ["Do you prefer to rewatch a good TV show or watch a new one that could be bad?"],
  ["You have to get ride of one of your 5 senses, which one do you give up on?"],
  ["Social media algorithmes speak about who we are and what we're interested in. Are you ready to show me your search recommandations on Instagram?"],
  ["Do you remember when you had an encounter with a wild animal?"],
  ["Do or did you play an musical instrument?"],
  ["Do you shower in the evening or in the morning ?"],
  ["What drives you most, the past or the future?"],
  ["Raclette ou fondue\u00A0?"],
  ["Raclette ou fondue\u00A0?"],
];

var colorArray = [
  "#D2B4DE", //
  "#F5B7B1", //
  "#D7BDE2", //
  "#E6B0AA", //
  "#F2D7D5", //
  "#D4E6F1", //
  "#A9CCE3", //
  "#D1F2EB", //
  "#D0ECE7", //
  "#D4EFDF", //
  "#D5F5E3", //
  "#FDEBD0", //
  "#F9E79F", //
  "#FAD7A0", //
  "#F5CBA7", //
  "#EDBB99", //
  "#D6EAF8", //
];

var numQuotes = quoteArray.length;
var numColors = colorArray.length;

var randomNum;

var randomColor;
var newRandomColor;

var randomColorNumber = 0;

// arrays each containing
// text at index 0
// and author at index 1
var quote;
var newQuote;

var twitterQuote = "";

$(document).ready(function() {
  // initialize quote to a random one
  randomNum = newRandomNumber();
  randomColor = newRandomColor();

  quote = newQuote(randomNum);
  twitterQuote = quote[0] + " " + quote[1];

  $("#quote-text").text(
    quote[0]);

  $("body").css("background-color", randomColor);
  $("#quote-text").css("color", randomColor);
  $("#quote-box button").css("background-color", randomColor);
  $("i").css("color", randomColor);

  // whenever #new-quote-icon is clicked
  $("#new-quote-icon").on("click", function() {

    randomNum = newRandomNumber();
    randomColor = newRandomColor();

    quote = newQuote(randomNum);
    twitterQuote = quote[0] + " " + quote[1];

    $("#quote-text").text(
      quote[0]);

    $("body").css("background-color", randomColor);
    $("#quote-text").css("color", randomColor);
    $("#quote-box button").css("background-color", randomColor);
    $("i").css("color", randomColor);

  }); // end of new quote function

  // when twitter icon is clicked
  $("#twitter-icon").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + twitterQuote);
  }); // end of twitter click function

}); // end of document ready function

// returns quote with index randomNum
function newQuote(randomNum) {
  return quoteArray[randomNum];
}

// returns number corresponding to
// quoteArray indices
function newRandomNumber() {
  var num = Math.floor(Math.random() * (numQuotes - 1));
  if (num >= randomNum) {
    num++;
  }
  return num;
}

// returns a new random color
// that is different than
// the current one
function newRandomColor() {
  var num = Math.floor(Math.random() * (numColors - 1));

  if (num >= randomColorNumber) {
    num++;
  }

  randomColorNumber = num;
  return colorArray[num];
}
