import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Root from './root';
import './index.css';
import {QueryClientProvider, QueryClient} from 'react-query'
import Signin from './pages/Signin';
import { Nav } from './components/Navbar/style';


const query = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <QueryClientProvider client={query}>
       <Root/>
      </QueryClientProvider>
    </BrowserRouter> 
  </>
);


