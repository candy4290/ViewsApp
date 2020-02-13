import AppStackNavigator from './navigator/AppNavigators';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MyTheme} from './theme/theme';
// import {Provider} from 'react-redux';
// import store from './store';

export default function App() {
  return (
    /**
     * 将store传给APP框架
     */
    // <Provider store={store}>
    <NavigationContainer theme={MyTheme}>
      <AppStackNavigator />
    </NavigationContainer>
    // </Provider>
  );
}
