import http from 'http';

const headers = {
  "X-Mashape-Key" : "uAA1Caea0NmshDLoLVMwGVZ2cmfep1dyijVjsnhiabKVrafxfc",
  "Accept": "application/json"
};

const options = {
  protocol: 'https:',
  host: 'andruxnet-random-famous-quotes.p.mashape.com',
  path: '/',
  headers
};


function getQuote(callback) {
  return http.get(options, function(response) {
    // Continuously update stream with data
    let body = '';

    response.on('data', function(chunk) {
        body += chunk;
    });

    response.on('end', function() {
        // end of fetching data
        //now convert to json and add callback!!
        const jsonData = JSON.parse(body);
        callback(jsonData);
    });
  });
}


export default {
  getQuote
};