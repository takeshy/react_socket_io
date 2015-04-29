import React from 'react';
class BlogHeader extends React.Component {
  render() {
    return (
      <tr>
      <td>{this.props.blog.title}</td>
      <td>{this.props.blog.content}</td>
      <td><a href={"#/"+this.props.blog.id }>Show</a></td>
      <td><a href={"#/"+this.props.blog.id +"/edit"}>Edit</a></td>
      <td><a href={"#/"+this.props.blog.id +"/destroy"} className="destroy">Destroy</a></td>
      </tr>
    )
  }
}
export default BlogHeader;
