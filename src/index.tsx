import React from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryDevtools as RQD } from 'react-query-devtools';
import { ReactQueryConfigProvider } from 'react-query';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false
  }
}


ReactDOM.render(
  <React.StrictMode>
    <ReactQueryConfigProvider config={queryConfig}>
      <App />
      <RQD initialIsOpen={false} />
    </ReactQueryConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
