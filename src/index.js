import React from 'react';
import ReactDOM from 'react-dom/client';

import { Layout } from 'constants/Layout.styled';
import { GlobalStyle } from 'constants/GlobalStyle';

import { App } from 'App';

import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';

import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <GlobalStyle />
          <BrowserRouter basename="/phonebook">
            <App />
          </BrowserRouter>
        </Layout>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
