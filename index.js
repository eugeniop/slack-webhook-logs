var request = require('request');


module.export = function(context,cb){
  
  reques.post('https://hooks.slack.com/services/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',{
    json: {
      text: '```\n' + JSON.stringify(context.data) + '\n```'
    }
  },function(e,s,b){
    console.log('Error', e);
    cb(e);
  });
};