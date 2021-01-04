import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import './main.scss';
import './tailwind.scss';
import hello from '~/util/hello';

// hello();
// console.log('index.js');
ReactDOM.render(<App />, document.getElementById('root'))