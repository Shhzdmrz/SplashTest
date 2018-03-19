import React from 'react';

import { StackNavigator } from 'react-navigation';

import ScreenOne from '../screens/ScreenOne'; 

const screenNav = {
    ScreenOne:{
      screen: ScreenOne,
      navigationOptions: {
        headerTitle: "Test Screen",
      } 
    }
};
  
const screenNavConfig = {
  
};
  
const AppNavigator = StackNavigator(screenNav, screenNavConfig);

export default AppNavigator;