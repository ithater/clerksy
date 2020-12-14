import 'normalize.css';
import './index.sass';


import 'loading-attribute-polyfill';

import header from './blocks/header/header';


header();


const arr = [[10]];


const number = arr[0];
console.log('number: ', number);


arr[0].push('a string');
console.log('number: ', number);
console.log('arr: ', arr);









