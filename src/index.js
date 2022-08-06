import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Root from './root';
import Signin from './pages/Signin';
import './index.css';


const count = 'data'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
     {
      count === 'data' && <Root/> || <Signin/>
     }
    </BrowserRouter> 
  </>
);


