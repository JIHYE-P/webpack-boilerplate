import React from 'react';

const Root = ({...props}) => {
  return <>
    <h1 {...props} className="p-4 bg-gray-400">Hello</h1>
    {/* <Button primary color="green">A styled button</Button> */}
  </>
} 
export default Root;