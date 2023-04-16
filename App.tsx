

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home";
import { useLayoutEffect } from 'react';
import Singlemovie from './components/Singlemovie';
import { HomeStackNavigatorParamList } from './Types';
import Searchbar from './components/Searchbar';

const Stack=createNativeStackNavigator<HomeStackNavigatorParamList>()
 const App=()=> {
 
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen  name="home" component={Home}/>
        <Stack.Screen  name="details" component={Singlemovie}/>
        <Stack.Screen  name="searchpage" component={Searchbar}/>

      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App