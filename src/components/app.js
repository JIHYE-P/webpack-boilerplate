import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './login';
import List from './List';
import ListItem from './listItem';
import recipeData from '~/util/recipe';
import Post from './post';

const App = ({...props}) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async() => {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(data.splice(0, 10));
    })();
  }, []);
  
  return <>
    <div class="text-5xl font-extrabold ...">
      <h1 class="bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-green-400 to-blue-500">Hello world</h1>
    </div>
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-100">
      {posts.map((post, i) => <Post key={`post-${i}`} post={post} />)}
    </div>
    {/* <div className="divide-y divide-gray-100">
      <List> {recipeData.map((data, i) => <ListItem key={`recipe-${i}`} recipe={data} />)} </List>
    </div>
    <Login /> */}
  </>
} 
export default App;