var express = require('express');
var router = express.Router();
var Articles = require('../../models/articles');

router.get('/', function(req, res, next) {
    Articles.find({},function(err, articles){
        if(err){
         return res.json({'success':false, 'error': err});
       }
        return res.json({'success':true, 'articles': articles});
      });
});

router.get('/:id', function(req,res){
    var id = req.params.id;
    Articles.findOne({'_id':id}, function(err, article){
      if(err){console.log(err);  
       return res.json({'success':false, 'error': err});
     }
      return res.json({'success':true, 'article': article});
    });
});

router.post('/', function(req, res) {
    Articles.create(new Articles({
        title: req.body.title,
        // slug: req.body.slug,
        // description: req.body.description,
        // keywords: req.body.keywords,
        // body: req.body.body,
        published: req.body.published
        // created: req.body.created,
        // modified: req.body.modified
      }), function(err, article){
        
        if(err){
          return res.json({success: false, article: req.body, error: err});
        }
    
        return res.json({success: true, article: article});
        
      });
});

router.put('/', function(req, res){
    Articles.findOne({'_id': req.body._id}, function(err, article){

        if(err) {
          return res.json({success: false, error: err});
        }
     
        if(article) {
     
        let data = req.body;
     
         if(data.title){
           article.title = data.title;
         };
     
         if(data.slug){
         article.slug = data.slug
         };
     
         if(data.description){
         article.description = data.description;
         };
     
         if(data.keywords){
            article.keywords = data.keywords;
            };
   
         if(data.body){
                article.body = data.body;
                };
       
         if(data.published){
            article.published = data.published;
            };
           
         article.save(function(err){
           if(err){
             return res.json({success: false, error: err});
           }else{
             return res.json({success: true, article:article});
           }
         });
     
        }
     
       });
});

router.delete('/:articleId', function(req,res){
    var articleId = req.params.articleId;

    Articles.remove({'_id':articleId}, function(err,removed){
  
      if(err){
        return res.json({success: false, error: err});
      }
  
      return res.json({success: true, status: removed});
  
    });
});

module.exports = router;