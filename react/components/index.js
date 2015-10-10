import React from 'react';
import {} from 'whatwg-fetch';
import Blog from './Blog';
import NewPost from './NewPost';
import Edit from './Edit';
import Show from './Show';
import { Router, Route } from 'react-router'
import BlogsActionCreators from '../actions/BlogsActionCreators';

function initial(data){
  BlogsActionCreators.initial(data.posts);
  React.render((
    <Router>
      <Route path="/" component={Blog}/>
      <Route component={NewPost} path="/new"/>
      <Route component={Edit} path="/:blogId/edit"/>
      <Route component={Show} path="/:blogId/show"/>
    </Router>
  ), document.getElementById('posts'));
}
window.reactInitial = initial;
