import {EventEmitter} from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher';
import BlogConstants from '../constants/BlogConstants';

const ActionTypes = BlogConstants.ActionTypes;
const CHANGE_EVENT = 'change';
let blogs = [];

const Blogs = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  all(){
    return blogs.concat([])
  },
  find(id){
    for(let i=0;i<blogs.length;i++){
      let blog = blogs[i];
      if(blog.id == id){
        return blog;
      }
    }
    return null;
  }
});

Blogs.dispatchToken = AppDispatcher.register(action => {

  switch (action.type) {
    case ActionTypes.RECEIVE_BLOG:
      blogs = blogs.concat(action.posts);
      Blogs.emitChange();
      break;
    case ActionTypes.UPDATE_BLOG:
      action.posts.forEach((post)=>{
        if(post.deleted){
          let nBlog = [];
          blogs.forEach((blog)=>{
            if(blog.id != post.id){
              nBlog.push(blog);
            }
          })
          blogs = nBlog;
        }else{
          let idx = blogs.map(blog=> blog.id).indexOf(post.id);
          if(idx != -1){
            let nBlog = [];
            blogs.forEach((blog)=>{
              if(blog.id != post.id){
                nBlog.push(blog);
              }else{
                nBlog.push(post);
              }
            });
            blogs = nBlog;
          }else{
            blogs = blogs.concat([post]);
          }
        }
      });
      Blogs.emitChange();
      break;
    case ActionTypes.DESTROY_BLOG:
      let nBlog = [];
      blogs.forEach((blog)=>{
        if(blog.id != action.post.id){
          nBlog.push(blog);
        }
      });
      blogs = nBlog;
      Blogs.emitChange();
      break;
  }
});

export default Blogs;
