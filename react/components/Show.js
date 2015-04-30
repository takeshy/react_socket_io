import React from 'react';
import Router from 'react-router'; 
var Link = Router.Link;
class Show extends React.Component {
  mixins: [ Router.State ]
  render(){
    var blogId = this.getParams().blogId;
    var blog = blogsStore.find(blogId);
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
}
export default Show;
