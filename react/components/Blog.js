import React from 'react';
import BlogsStore from '../stores/Blogs';
import BlogsActionCreators from '../actions/BlogsActionCreators';
import BlogHeader from './BlogHeader';
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
  }
  componentDidMount() {
    BlogsStore.addChangeListener(this._onChange.bind(this));
    BlogsActionCreators.initial(this.props.posts);
  }
  componentWillUnmount() {
    BlogsStore.removeChangeListener(this._onChange.bind(this));
  }
  _onChange() {
    this.setState({ blogs: BlogsStore.all()});
  }
  render() {
    return (
      <div>
      <h1>Listing posts</h1>
      <table id="posts-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
        {this.state.blogs.map(blog => <BlogHeader key={blog.id} blog={blog} />)}
        </tbody>
      </table>
      <a href="#/new">New Post</a>
      </div>
    );
  }
}
export default Blog;
