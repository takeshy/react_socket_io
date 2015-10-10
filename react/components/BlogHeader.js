import React from 'react';
import BlogsActionCreators from '../actions/BlogsActionCreators';
import { Link } from 'react-router'
class BlogHeader extends React.Component {
  clickDestroy(){
    BlogsActionCreators.destroyBlog(this.props.blog);
  }
  render() {
    return (
      <tr>
        <td>{this.props.blog.title}</td>
        <td>{this.props.blog.content}</td>
        <td><Link to={`/${this.props.blog.id}/show`}>Show</Link></td>
        <td><Link to={`/${this.props.blog.id}/edit`}>Edit</Link></td>
        <td><a onClick={this.clickDestroy.bind(this)} className="destroy">Destroy</a></td>
      </tr>
    )
  }
}
export default BlogHeader;
