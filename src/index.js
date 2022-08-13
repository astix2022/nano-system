import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,} from 'react-router-dom';
import './index.css';
import {QueryClientProvider, QueryClient} from 'react-query'
import Signin from './pages/Signin';
import Routers from './routers';
import RouterSatbar from './Admin/RouterSaytbar'
import Root from './root';
import Saytbar from './Admin/components/Saytbar';

const query = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <QueryClientProvider client={query}>
        <Saytbar/>
      </QueryClientProvider>
    </BrowserRouter> 
  </>
);


{/* {
        localStorage.getItem('token') ? <Routers/> : <Signin/>
       } */}


