import AppNavigators from './navigator/AppNavigators';
import React from 'react';
// import {Provider} from 'react-redux';
// import store from './store';

export default function App() {
  return (
    /**
     * 将store传给APP框架
     */
    // <Provider store={store}>
    <AppNavigators />
    // </Provider>
  );
}
