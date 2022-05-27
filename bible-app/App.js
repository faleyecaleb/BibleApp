import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';
import Details from './src/screens/DetailsCategory';
import Discussions from './src/screens/discussionScreen/Discussions';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='Discussion' component={Discussions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

