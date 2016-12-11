var express = require('express');
var router = express.Router();
var filereader = require('../lib/filereader');

/* GET home page. */
router.get('/', function(req, res, next) {
    var allPosts = JSON.parse(filereader.readFile('Posts'));
    res.render('index', { posts: allPosts.posts.row });
});
// router.get('/post/:id', function(req, res, next) {
//     var post = JSON.parse(filereader.readFile('Posts'));
//     res.json(post.posts.rowId[req.params.id]);
//     //res.render('post', { posts: post.posts.row.Id[req.params.id] });
// });

module.exports = router;
