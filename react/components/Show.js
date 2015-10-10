import React from 'react';
import BlogsStore from '../stores/Blogs';
import { Link } from 'react-router'
var Show = React.createClass({
  render(){
    var blogId = this.props.params.blogId;
    var blog = BlogsStore.find(blogId);
    return (
      <div>
        <p>
          <h3> Title </h3>
          <span>{ blog.title }</span>
        </p>
        <p>
          <h3> Content </h3>
          <span>{ blog.content }</span>
        </p>
        <Link to="/">Back</Link>
      </div>
    )
  }
});
export default Show;
