import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { Route } from '../Constants';
import Home from '../screens/Home';
import RegisterScreen from '../screens/RegisterScreen';
import VerifyScreen from '../screens/VerifyScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const StackRouter = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName={Route.Home}
      screenOptions={{headerShown: true}}>
      {/* <Stack.Group screenOptions={{ presentation: 'modal', gestureEnabled: false }}> */}
      {/* <Stack.Screen name={Route.ForceUpdateAlertModal} component={ForceUpdateAlertModal} /> */}
      {/* </Stack.Group> */}
      <Stack.Screen name={Route.Home} component={Home} />
      <Stack.Screen name={Route.RegisterScreen} component={RegisterScreen} />
      <Stack.Screen name={Route.VerifyScreen} component={VerifyScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;
