// var xhr = new XMLHttpRequest();
var quoteUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";


fetch(quoteUrl)
  .then(function(response) {return response.json();})
  .catch(function(error) {
    console.error(error);
  })
  .then(function(jsonData) {
    console.log(jsonData);
  });

// xhr.onreadystatechange = function() {
//   var DONE = 4;
//   var OK = 200; 

//   if (xhr.readyState === DONE) {
//     xhr.status === OK ? console.log(xhr.responseText) : console.log('Error: ' + xhr.status);
//   }
// }


// xhr.open("GET", quoteUrl);

// xhr.send(null);
