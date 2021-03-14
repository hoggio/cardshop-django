import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { useEffect, useMemo } from 'react';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const middleware = [thunk];

export const useStore = initialState => {
  useEffect(() => {
    const cartItemsFromStorage = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];

    const initialState = {
      cart: { cart: cartItemsFromStorage },
    };
  }, []);

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
};

import { Provider } from 'react-redux';
import { useStore } from '../store';
import Layout from '../components/Layout';
import '../styles/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
