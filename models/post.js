var lastId = 0;
var posts = {}
function Post(obj) {
  for (var key in obj) {
    this[key] = obj[key]; 
  }
}
function create(args,fn){
  var post = new Post(args);
  post.id = ++lastId;
  posts[post.id] = post;
  fn(null,post);
}
function all(fn){
  var keys = Object.keys(posts);
  var length = keys.length;
  var values = Array(length);
  for (var i = 0; i < length; i++) {
    values[i] = posts[keys[i]];
  }
  fn(null,values);
}
function destroy(postId,fn){
  delete(posts[postId]);
  fn(null,{id: postId, deleted: true })
}
function update(args,fn){
  posts[args.id] = new Post(args);
  fn(null,posts[args.id]);
}
module.exports = {create: create,all: all,destroy: destroy,update: update}
