import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';
import Details from './src/screens/DetailsCategory';
import { Discussions } from './src/screens/discussionScreen/Discussions';
import Quiz from './src/screens/quiz/Quiz';
import FirstScreen from './src/screens/FirstScreen';
import Yoruba from './src/screens/Yoruba';
import AboutUs from './src/screens/AboutUs';


const Stack = createStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='FirstScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='Discussion' component={Discussions} />
        <Stack.Screen name='Quiz' component={Quiz} />
        <Stack.Screen name='FirstScreen' component={FirstScreen} />
        <Stack.Screen name='Yoruba' component={Yoruba} />
        <Stack.Screen name='About' component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

