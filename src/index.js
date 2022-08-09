import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Root from './root';
import './index.css';
import SignIn from './pages/Signin'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <SignIn/>
    </BrowserRouter> 
  </>
);


