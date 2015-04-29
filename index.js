import React from 'react';
import {} from 'whatwg-fetch';
import Blog from './react/components/Blog';

function initial(data){
  React.render(<Blog posts={data.posts}/>, document.getElementById('posts'));
}
window.reactInitial = initial;
