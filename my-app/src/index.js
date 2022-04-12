import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import * as App from './App';
import reportWebVitals from './reportWebVitals';

const fruits = ['apple', 'banana', 'orange']
const container = document.querySelector('#root');
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App.Func1 name='MaxSida' fruits={fruits} />
    <App.ShowTime />
    <App.Func2 src='https://cuongtruyen.com/wp-content/uploads/2019/09/luffy-funny-face.jpg'/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
