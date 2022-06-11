import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';
import Details from './src/screens/DetailsCategory';
import {Discussions} from './src/screens/discussionScreen/Discussions';
import { UserContext } from './src/screens/discussionScreen/UserContext';
import Quiz from './src/screens/quiz/Quiz';


const Stack = createStackNavigator();


export default function App() {
  return (

    // <UserContext.Provider value='THIS IS GOING TO BE AWE'>
      
        
    // </UserContext.Provider>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='Details' component={Details} />
          <Stack.Screen name='Discussion' component={Discussions} />
          <Stack.Screen name='Quiz' component={Quiz} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

