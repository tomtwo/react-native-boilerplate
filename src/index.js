// @flow

import React from 'react';
import { Text, View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';

import Router from './router';

import configureStore from './redux/configureStore';

const store = configureStore();

export default class AppRoot extends React.Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <Router />
      </ReduxProvider>
    );
  }
}
