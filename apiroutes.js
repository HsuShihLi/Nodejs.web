var express = require("express");
var api=express.Router();

var guestbook = require('./guestbookController');
api.route('/guestbook')
    .get(guestbook.list_all_entries)
    .post(guestbook.create_an_entry)
    .put(guestbook.update_an_entry)
    .delete(guestbook.delete_an_entry);
/*api.route('/guestbooks')  //new 一個router
   .get(function(req,res){
     return res.json({
       success:true
      })
})
*/
api.use(function(req, res, next){
  res.status(404);
  if (req.accepts('json')) {   //來判斷是否接受是以json格式
    return res.send({ error: 'Not found' });
  }
  res.type('txt').send('Not found');
});
module.exports = api;

