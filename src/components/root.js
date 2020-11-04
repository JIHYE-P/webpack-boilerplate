import React from 'react';
import Box from './box';

const Root = ({...props}) => {
  return <>
    <h1 {...props}>Hello</h1>
    <Box />
  </>
} 
export default Root;