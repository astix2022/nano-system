import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,} from 'react-router-dom';
import Root from './root';
import './index.css';
import {QueryClientProvider, QueryClient} from 'react-query'
import Signin from './pages/Signin';


const query = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <QueryClientProvider client={query}>
       {
        localStorage.getItem('token') ? <Root/> : <Signin/>
       }
      </QueryClientProvider>
    </BrowserRouter> 
  </>
);


