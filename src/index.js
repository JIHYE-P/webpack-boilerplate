import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import './main.scss';
import './tailwind.css';
import hello from '~/util/hello';

// hello();
// console.log('index.js');
ReactDOM.render(<Root />, document.getElementById('root'))