var request = require('request');

module.exports = function(context,cb){

  console.log(context);

  if(context.params.apikey !== '123456789') return cb('Invalid API Key');
  
  request.post('https://hooks.slack.com/services/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',{
    json: {
      text: '```\n' + JSON.stringify(context.data) + '\n```'
    }
  },function(e,s,b){
    console.log('Error', e);
    cb(e);
  });
};