import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, } from 'react-router-dom';
import './index.css';
import {Provider} from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'
// import Signin from './pages/Signin';
import Routers from './routers';
import store  from './store/store';

const query = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={query}>
          <Routers />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </>
);


{/* {
        localStorage.getItem('token') ? <Routers/> : <Signin/>
       } */}


