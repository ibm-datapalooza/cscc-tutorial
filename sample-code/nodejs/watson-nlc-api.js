var config = require('./config');
var request = require('request');

var text = 'Will the rain delay the start of the Andy Murray match?'

var options = {
  uri: 'https://gateway.watsonplatform.net/natural-language-classifier/api/v1/classifiers/'
      +config.WATSON_NLC_CLASSIFIER_ID
      +'/classify'
      +'?text='+encodeURIComponent(text),
  method: 'GET',
  auth: {
    user: config.WATSON_NLC_CLASSIFIER_USER,
    password: config.WATSON_NLC_CLASSIFIER_PASSWORD
  }
};

request(options, function (err, response) {
  if(!err){
      if(response && response.body){
        console.log(response.body);
      }
  }
  else{
    console.log(err);
  }
});
