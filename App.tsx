import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AllScreens from './Navigation/Stack/AllScreens';

function App() {
  return (
    <NavigationContainer>
      <AllScreens />
    </NavigationContainer>
  );
}

export default App;
