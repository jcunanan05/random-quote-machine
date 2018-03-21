var xhr = new XMLHttpRequest();
var quoteUrl = "https://andruxnet-random-famous-quotes.p.mashape.com/";
var options = {
  headers: {
    "Accept": "application/json",
    "X-Mashape-Key" : "uAA1Caea0NmshDLoLVMwGVZ2cmfep1dyijVjsnhiabKVrafxfc"
  }
};

//tried using fetch and XHR API
xhr.onreadystatechange = onreadystatechange;

function onreadystatechange() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if(xhr.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + xhr.status);
    } 


    //success
    // console.log(xhr.responseText);
    updateQuote(xhr.responseText);
  }
}

function getQuote() {
  xhr.open('GET', quoteUrl, true);
  xhr.setRequestHeader("Accept", options.headers["Accept"]);
  xhr.setRequestHeader("X-Mashape-Key", options.headers["X-Mashape-Key"]);
  xhr.send();
}


function updateQuote(responseText) {
  var quotes = convertToJson(responseText);

  console.log(quotes);
}


function convertToJson(jsonText) {
  if (!JSON.parse(jsonText)) {
    return "";
  }

  return JSON.parse(jsonText);
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