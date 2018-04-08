var xhr = new XMLHttpRequest();
var quoteUrl = "https://andruxnet-random-famous-quotes.p.mashape.com/";
var quoteObj = {};
var quoteStatement = document.querySelector("#quote");
var citation = document.querySelector("#cite");
var newQuoteButton = document.querySelector("#newQuote");
var tweet = document.querySelector("#tweet");
var body = document.querySelector("body");

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
    changeBackgroundColor([body]);
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
  var author = 'unknown';

  //leave the original html text if no response
  if(responseText) {
    quote = JSON.parse(responseText);
    setQuoteObj(quote);
  };

  //update html
  if(quote.quote) quoteStatement.innerHTML = '"' + quote.quote + '"';
  if(quote.author) citation.innerHTML = "- " + author;
  console.log(quote);
  // setQuoteObj(quote);
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


function changeBackgroundColor(elements) {
  var r = randomNumber(256);
  var g = randomNumber(256);
  var b = randomNumber(256);

  elements.forEach(element => {
    element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}


function randomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}


// function changeColors() {
//   changeBackgroundColor([body]);
// }


// function getQuoteObj() {
//   return quoteObj;
// }


// function convertToJson(jsonText) {
//   if (!JSON.parse(jsonText)) {
//     return "";
//   }

//   return JSON.parse(jsonText);
// } 

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