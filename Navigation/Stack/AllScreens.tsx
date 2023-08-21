import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TodoHome from '../TodoHome';
import Home from '../Home';
import Calendar from '../Calender';

type StackScreens = {
  Home: undefined;
  TodoHome: undefined;
  TodoList: undefined;
  Calender: undefined;
};

const Stack = createNativeStackNavigator<StackScreens>();

const AllScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TodoHome" component={TodoHome} />
      <Stack.Screen name="Calender" component={Calendar} />
    </Stack.Navigator>
  );
};

export default AllScreens;
