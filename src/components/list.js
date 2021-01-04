import React from 'react';

const List = ({children}) => {
  return <ul className="divide-y divide-gray-100">
    {children}
  </ul>
}

export default List