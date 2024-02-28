import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLayerGroup, faUsers, faList, faPlus } from '@fortawesome/free-solid-svg-icons'
import { configureStore } from '@reduxjs/toolkit/react';
import { Provider } from 'react-redux';
import customerReducer from './redux/customerSlice.tsx';

library.add(faLayerGroup, faUsers, faList, faPlus)

const store = configureStore({
  reducer: {
    customers: customerReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
