import AppDispatcher from '../dispatcher/AppDispatcher';
import BlogConstants from '../constants/BlogConstants';

const ActionTypes = BlogConstants.ActionTypes;

const Action = {
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
