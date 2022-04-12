import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.querySelector('#root');
const root = createRoot(container);

const profile = {
  coverImageUrl: process.env.PUBLIC_URL + "/img/cover.jpeg",
  avatarUrl: process.env.PUBLIC_URL + "/img/tao-bao-ca.jpg",
  fullName: 'Max Sida',
  introduce: 'Con nghiện chân chính'
};

root.render(
  <React.StrictMode>
    <App profile={profile} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
