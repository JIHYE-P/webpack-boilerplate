import React from 'react';

const HorizontalCard = ({post}) => {
  return <div className="flex-none lg:flex border border-gray-200 bg-white rounded relative">
    <div className="relative w-full lg:w-48 flex-none">
      <img src={post.url} className="w-full h-full" alt="" />
    </div>
    <div className="p-5">
      <h1 className="text-xl text-gray-700 font-bold capitalize mb-4">{post.title}</h1>
      <div className="text-lg text-gray-500 leading-normal">{post.body}</div>
    </div>
  </div>
}

export default HorizontalCard;