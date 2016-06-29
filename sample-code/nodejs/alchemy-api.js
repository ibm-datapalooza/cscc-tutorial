var config = require('./config');
var request = require('request');

var text = 'Andy Murray and Liam Broady make their way off court to a standing ovation... #Wimbledon'

var options = {
  uri: 'http://gateway-a.watsonplatform.net/calls/text/TextGetRankedNamedEntities'
      +'?apikey='+config.ALCHEMY_API_KEY
      +'&text='+encodeURIComponent(text)
      +'&outputMode=json',
  method: 'GET'
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
