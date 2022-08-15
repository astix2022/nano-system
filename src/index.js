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
<<<<<<< HEAD
      <Provider store={store}>
        <QueryClientProvider client={query}>
          <Routers />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
=======
      <QueryClientProvider client={query}>
        <RouterSatbar/>
      </QueryClientProvider>
    </BrowserRouter> 
>>>>>>> d7e6484232bf25e95462a529954e694959fdab36
  </>
  
);


{/* {
        localStorage.getItem('token') ? <Routers/> : <Signin/>
       } */}


