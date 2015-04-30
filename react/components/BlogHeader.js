import React from 'react';
import BlogsActionCreators from '../actions/BlogsActionCreators';
import Router from 'react-router'; 
var Link = Router.Link;
class BlogHeader extends React.Component {
  clickDestroy(){
    BlogsActionCreators.destroyBlog(this.props.blog);
  }
  render() {
    return (
      <tr>
        <td>{this.props.blog.title}</td>
        <td>{this.props.blog.content}</td>
        <td><Link to="show" params={{blogId: this.props.blog.id}}>Show</Link></td>
        <td><Link to="edit" params={{blogId: this.props.blog.id}}>Edit</Link></td>
        <td><a onClick={this.clickDestroy.bind(this)} className="destroy">Destroy</a></td>
      </tr>
    )
  }
}
export default BlogHeader;
