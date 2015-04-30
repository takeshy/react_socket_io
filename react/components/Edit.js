import React from 'react';
import Router from 'react-router'; 
import BlogsActionCreators from '../actions/BlogsActionCreators';
import BlogsStore from '../stores/Blogs';
var Link = Router.Link;
var Edit = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    var blogId = this.context.router.getCurrentParams().blogId;
    var blog = BlogsStore.find(blogId)
    return({id: blog.id,title: blog.title,content: blog.content});
  },
  changeTitle(e) {
    this.setState({title: e.target.value});
  },
  changeContent(e) {
    this.setState({content: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    BlogsActionCreators.updateBlog({id: document.getElementById("blog_id").value,title: document.getElementById("title").value,content: document.getElementById("content").value},()=>{
      this.context.router.transitionTo('/');
    });
  },
  render(){
    return (
      <div>
        <h1>Edit post</h1>
        <form id="edit-post" name="post"  onSubmit={this.handleSubmit}>
          <div className="field">
            <input type="hidden" id="blog_id" value={this.state.id}/>
            <label> Title:
              <input type = "text" name='title' id="title" value={this.state.title} onChange={this.changeTitle}/>
           </label>
          </div>
          <div className="field">
            <label> Content:
              <input type="text" name='content' id="content" value={this.state.content} onChange={this.changeContent}/>
           </label>
          </div>
          <div className="actions">
            <input type='submit' value="Update Post"/>
          </div>
        </form>
        <Link to="/">Back</Link>
      </div>
    )
  }
});
export default Edit;
