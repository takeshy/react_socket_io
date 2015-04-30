import React from 'react';
import Router from 'react-router'; 
import BlogsStore from '../stores/Blogs';
var Link = Router.Link;
var Show = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render(){
    var blogId = this.context.router.getCurrentParams().blogId;
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
