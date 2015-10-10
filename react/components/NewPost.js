import React from 'react';
import BlogsActionCreators from '../actions/BlogsActionCreators';
import { Link } from 'react-router'
var NewPost = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    BlogsActionCreators.createBlog({title: document.getElementById("title").value,content: document.getElementById("content").value},()=>{
      this.props.history.pushState(null, '/', null);
    });
  },
  render: function(){
    return (
      <div>
        <h1>New post</h1>
        <form id="new-post" name="post" onSubmit={this.handleSubmit}>
          <div className="field">
            <label> Title:
              <input type = "text" name='title' id="title"/>
           </label>
          </div>
          <div className="field">
            <label> Content:
              <input type="text" name='content' id="content"/>
           </label>
          </div>
          <div className="actions">
            <input type='submit' value="Create Post"/>
          </div>
        </form>
        <Link to="/">Back</Link>
      </div>
    )
  }
})
export default NewPost;
