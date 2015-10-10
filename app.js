
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , logger = require('morgan')
  , Post = require('./models/post')
  , errorHandler = require('errorhandler');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('express-method-override')());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
  Post.all(function(err,recs){
    if (err) return next(err);
    res.render('index',{initialData: JSON.stringify({posts: recs})});
  });
});

app.route('/posts')
.get(function(req,res){
  Post.all(function(err,obj){
    if (err) return next(err);
    res.send(obj)
  });
})
.post(function(req,res){
  Post.create(req.body,function(err,obj){
    if (err) return next(err);
    res.send(obj)
    postListener.emit("post", JSON.stringify([obj]));
  });
})

app.route('/posts/:id')
.put(function(req,res){
  Post.update(req.body,function(err,obj){
    if (err) return next(err);
    res.send(obj)
    postListener.emit("post", JSON.stringify([obj]));
  });
})
.delete(function(req,res){
  Post.destroy(req.params.id,function(err,obj){
    if (err) return next(err);
    res.send(obj)
    postListener.emit("post", JSON.stringify([obj]));
  });
});

var server = http.createServer(app)
var io = require('socket.io').listen(server);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

postListener = io.of("/posts").on('connection', function (socket) { });

