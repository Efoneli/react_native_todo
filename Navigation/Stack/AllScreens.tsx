import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TodoList from '../TodoList';
import TodoHome from '../TodoHome';
import Home from '../Home';

type StackScreens = {
  Home: undefined;
  TodoHome: undefined;
  TodoList: undefined;
};

const Stack = createNativeStackNavigator<StackScreens>();

const AllScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TodoHome" component={TodoHome} />
      <Stack.Screen name="TodoList" component={TodoList} />
    </Stack.Navigator>
  );
};

export default AllScreens;
