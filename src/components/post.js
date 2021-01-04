import React from 'react';

const Post = ({post}) => {
  return <div className="p-4 shadow bg-white rounded">
    <div className="flex flex-wrap items-center">
      <span className="text-sm text-gray-500">Jun 1, 2020</span>
      <span className="px-4 py-2 text-sm text-white bg-gray-600 rounded ml-auto">Design</span>
      <div className="flex-none w-full mt-2">
        <h2 className="text-gray-900 text-lg font-semibold capitalize">{post.title}</h2>
        <div className="text-gray-600 text-md leading-relaxed mt-3">{post.body}</div>
      </div>
    </div>
  </div>
}

export default Post;