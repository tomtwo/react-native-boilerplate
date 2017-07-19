import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeView from './components/HomeView';
import TestView from './components/TestView';

const AppRouter = StackNavigator({
  Home: { screen: HomeView },
  Tests: { screen: TestView },
});

export default AppRouter;
