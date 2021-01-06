import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Login from './login';
// import List from './List';
// import ListItem from './listItem';
// import Post from './post';
// import HorizontalCard from './horizontalCard';
// import recipeData from '../util/recipe';
// import StyledIndex from '../styles';

const App = ({...props}) => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   (async() => {
  //     const {data: postData} = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     const {data: photoData} = await axios.get('https://jsonplaceholder.typicode.com/photos');
  //     const posts = postData.slice(0, 10);
  //     const photos = photoData.slice(0, 10);
  //     const result = posts.map((post, i) => Object.assign(post, photos[i]));
  //     setPosts(result);
  //   })();
  // }, []);

  return <>
    <h1 className="text-4xl text-indigo-300">How to Style Your React Apps with Less Code Using Tailwind CSS, Styled Components, and Twin Macro</h1>
    {/* <StyledIndex>
      <h1 className="text-4xl text-indigo-300">How to Style Your React Apps with Less Code Using Tailwind CSS, Styled Components, and Twin Macro</h1>
    </StyledIndex> */}
    {/* <button className='btn-main'>button</button>
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100">
      {posts.map((post, i) => <HorizontalCard key={`post-${i}`} post={post} />)}
    </div>
    <div className="p-6 md:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 bg-gray-100">
      {posts.slice(0, 5).map((post, i) => <Post key={`post-${i}`} post={post} />)}
    </div>
    <div class="text-5xl font-extrabold">
      <h1 class="bg-clip-text text-transparent uppercase font-mono bg-gradient-to-r from-green-400 to-blue-500">Hello world</h1>
    </div>
    <div className="divide-y divide-gray-100">
      <List> {recipeData.map((data, i) => <ListItem key={`recipe-${i}`} recipe={data} />)} </List>
    </div>
    <Login /> */}
  </>
} 
export default App;