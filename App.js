import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './introduction';
import Tela from './src/home/home';
import Carrousel from './src/home/home';


function App () {

  const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro">
          <Stack.Screen
            name="Intro"
            component={Intro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Carrousel}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detalhes"
            component={Tela}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
    

};

export default App;
