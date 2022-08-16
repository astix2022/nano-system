import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, } from 'react-router-dom';
import './index.css';
import {Provider} from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'
import store  from './store/store';
import Root from './root';
import RouterSaytbar from './Admin/RouterSaytbar';

const query = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={query}>
          <RouterSaytbar/>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </>
  
);





