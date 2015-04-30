import AppDispatcher from '../dispatcher/AppDispatcher';
import BlogConstants from '../constants/BlogConstants';
import request from 'superagent';

const ActionTypes = BlogConstants.ActionTypes;

const Action = {
  createBlog(post,fn){
    request.post("/posts").send(post).set('Accept', 'application/json').end((err,res)=>{
      if(err){
        alert(err.message);
      }
      AppDispatcher.dispatch({
        type: ActionTypes.UPDATE_BLOG,
        posts: [res.body]
      });
      fn();
    })
  },
  updateBlog(post,fn){
    post["_method"] = "put"
    request.post("/posts/" + post.id).send(post).set('Accept', 'application/json').end((err,res)=>{
      if(err){
        alert(err.message);
      }
      AppDispatcher.dispatch({
        type: ActionTypes.UPDATE_BLOG,
        posts: [res.body]
      });
      fn();
    })
  },
  destroyBlog(post){
    request.post("/posts/" + post.id).send({_method: "DELETE"}).set('Accept', 'application/json').end((err,res)=>{
      AppDispatcher.dispatch({
        type: ActionTypes.DESTROY_BLOG,
        post: post
      });
    })
  },
  initial(posts){
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_BLOG,
      posts: posts
    });
    var socket = io.connect("http://localhost:3000/posts")
    socket.on('connect', ()=>{
      socket.on("post", (msg)=>{
        AppDispatcher.dispatch({
          type: ActionTypes.UPDATE_BLOG,
          posts: JSON.parse(msg)
        });
      })
    });
  }
};

export default Action;
