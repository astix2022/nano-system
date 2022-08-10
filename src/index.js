import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Root from './root';
import './index.css';
import Signin from './pages/Signin'

const count = 5
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    {
      count === 5 ? <Root/> : <Signin/>
    }
    </BrowserRouter> 
  </>
);


