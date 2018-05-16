var xhr = new XMLHttpRequest();
var quoteUrl = "https://andruxnet-random-famous-quotes.p.mashape.com/";
var quoteObj = {};
var quoteStatement = document.querySelector(".js-quote");
var citation = document.querySelector(".js-cite");
var newQuoteButton = document.querySelector(".js-new-quote");
var tweet = document.querySelector(".js-tweet");
var body = document.querySelector(".js-body");
var header = document.querySelector("h1");

var options = {
  headers: {
    "X-Mashape-Key" : "uAA1Caea0NmshDLoLVMwGVZ2cmfep1dyijVjsnhiabKVrafxfc",
    "Accept": "application/json"
  }
};

//event listeners
newQuoteButton.addEventListener("click", handleNewQuote);

function handleNewQuote() {
  console.log("new quote!!");

  getQuote();
}


//tried using fetch and XHR API
xhr.onreadystatechange = onreadystatechange;

function onreadystatechange() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    //fail
    if(xhr.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + xhr.status);

      return;
    } 


    //success
    // console.log(xhr.responseText);
    updateQuote(xhr.responseText);
    updateTweet();
    changeColors();
  }
}

function getQuote() {
  xhr.open('GET', quoteUrl, true);
  xhr.setRequestHeader("Accept", options.headers["Accept"]);
  xhr.setRequestHeader("X-Mashape-Key", options.headers["X-Mashape-Key"]);
  xhr.send();
}


function updateQuote(responseText) {
  var quote = "";

  //leave the original html text if no response
  if(responseText) {
    quote = JSON.parse(responseText)[0];
    setQuoteObj(quote);
  };

  //update html
  if(quote.quote) quoteStatement.innerHTML = '"' + quote.quote + '"';
  if(quote.author) citation.innerHTML = "- " + quote.author;
}


function updateTweet() {
  var twitterLink = "https://twitter.com/intent/tweet?text=";
  var doubleQuote = "%22";
  var newLine = "%0A";
  tweet.setAttribute("href", `${twitterLink}${doubleQuote}${quoteObj.quote}${doubleQuote}${newLine} - ${quoteObj.author}`);
}


function setQuoteObj(quote) {
  quoteObj = quote;
}


function changeColors() {
  var randomColor = randomRGB();

  body.style.borderColor = `${randomColor}`;
  body.style.color = `${randomColor}`;
  header.style.color = `${randomColor}`;
}

function randomRGB(){
  var r = randomNumber(256);
  var g = randomNumber(256);
  var b = randomNumber(256);

  return `rgb(${r}, ${g}, ${b})`;
}


function randomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

// fetch(quoteUrl, options)
// .then(
//   function(response) {
//     if (response.status !== 200) {
//       console.log('Looks like there was a problem. Status Code: ' +
//         response.status);
//       return; 
//     }


//     // Examine the text in the response
//     response.json()
//     .then(function(data) {
//       console.log(data);
//     });
//   }
// )
// .catch(function(err) {
//   console.log('Fetch Error :-S', err);
// });

getQuote();