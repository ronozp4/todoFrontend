import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import TaskControl from './src/screens/TaskControl';
import { screens } from './src/utils/constants';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screens.HOME}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.TASK_CONTROL}
          component={TaskControl}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App