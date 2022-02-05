const router = require("express").Router();
var Blog = require('../models/blogs');

router.get('/PostBlogs', function (req, res) {
    Blog.selectAll(function(err, data) {
      if(err) {
        res.status(500);
      } else {
        res.json(data);
      }
    });
  });
  
  router.post('/PostBlogs', (req, res) => {
    console.log(req.body)
    Blog.create(req.body, (err,success)=>{
      if(err){
        console.error(err)
      }
      else{
        res.send(success)
      }
    })
  })
  
  router.delete('/removeBlogs/:id', function(req,res){
    let id=req.params.id
    console.log(id);
    Blog.findOneAndDelete({id}, (err,result)=>{
      if(err){
        console.log(err);
      } else {
        res.send("deleted");
      }
    })
  })
  
  module.exports = router;