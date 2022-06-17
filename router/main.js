const bodyParser = require('body-parser');

module.exports = function(app) {
     app.use(bodyParser.json());       // to support JSON-encoded bodies
     app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
         extended: true
      }));
     
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/blog-post',function(req,res){
        res.render('blog-post.html');
    });
     app.get('/blog',function(req,res){
      res.render('blog.html');
    });
     app.get('/contact',function(req,res){
      res.render('contact.html');
    });
     app.get('/portfolio-item',function(req,res){
      res.render('portfolio-item.html');
    });
     app.get('/portfolio',function(req,res){
      res.render('portfolio.html');
    });
     app.get('/ui-elements',function(req,res){
      res.render('ui-elements.html');
    });
     
    app.get('/listall', function (req, res) {
      //res.render('about.html');
      console.log('listall...');
      const getNumber = req.body.getNumber;
      let response = {
            'result': 'true',
            'getLists': getNumber 
      }
      
      console.log('response : ' + response);
      res.status(200).json(response);
   });  // end of get
     
}
