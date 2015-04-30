import React from 'react';
import {} from 'whatwg-fetch';
import Blog from './react/components/Blog';
import NewPost from './react/components/NewPost';
import Edit from './react/components/Edit';
import Show from './react/components/Show';
import Router from 'react-router'; 
import BlogsActionCreators from './react/actions/BlogsActionCreators';
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var App = React.createClass({
  render: function () {
    return (
      <div>
       <RouteHandler/>
     </div>
    )
  }
})
function initial(data){
  BlogsActionCreators.initial(data.posts);
  var routes = (
    <Route name="app" path="/" handler={App}>
      <Route name="new" handler={NewPost} path="/new"/>
      <Route name="edit" handler={Edit} path="/:blogId/edit"/>
      <Route name="show" handler={Show} path="/:blogId/show"/>
      <DefaultRoute handler={Blog}/>
    </Route>
  );
  Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('posts'));
  });
}
window.reactInitial = initial;
