var request = require('request');

module.exports = function(context,cb){

  console.log(context);

  if(context.query.apikey != '123456789') return cb('Invalid API Key');
  
  request.post('https://hooks.slack.com/services/T0E2T....xvWGY',{
    json: {
      text: '```\n' + JSON.stringify(context.data) + '\n```'
    }
  },function(e,s,b){
    console.log('Error', e);
    cb(e);
  });
};