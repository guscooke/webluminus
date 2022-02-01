import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import "antd/dist/antd.css";
import reducers from "./reducers";


const store = createStore(reducers);

store.subscribe(() => {
  console.log(store.getState());
});

const jsx = (  
	<Provider store={store}>  	
		<AppRouter />    
	</Provider>  
);

ReactDOM.render(jsx, document.getElementById("app"));
