import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import Main from './screens/Main';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Screen name="Main" component={Main} />
    </NavigationContainer>
  );
};

export default Routes;
