import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,} from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import store from "./store/store";
import Root from "./root";
import "./index.css";

const query = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<BrowserRouter>
			<Provider store={store}>
				<QueryClientProvider client={query}>
					<Root />
				</QueryClientProvider>
			</Provider>
		</BrowserRouter>
	</>
);
