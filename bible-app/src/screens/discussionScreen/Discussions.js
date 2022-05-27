import { View, Text, useWindowDimensions, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React, {useContext} from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// import Part1 from './Part1';
// import Part2 from './Part2';
import COLORS from '../../consts/colors';
import DiscussionTab from '../../components/DiscussionTab';
import { UserContext } from './UserContext';

export const Discussions = ({navigation, route}) => {
  const [books, setBooks] = React.useState(route.params);
  const book = useContext(UserContext)
    

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.gradientDark} />
      <View style={styles.header}>
        <Text style={styles.headerText}>{books.title}</Text>
        <Text style={{color: COLORS.white, fontSize: 15}}>Week 1</Text>
      </View>

      <UserContext.Provider value= {books}>
        <DiscussionTab />
      </UserContext.Provider>
    </View>
    
  )
}



const styles = StyleSheet.create({
  container: { width: '100%', 
  height: '100%', 
  backgroundColor: COLORS.white,

  },

  header: {
    backgroundColor: COLORS.gradientDark,
    paddingHorizontal: 20, 
    paddingVertical: 10
  },

  headerText: {
    fontSize: 20, 
    color: COLORS.white, 
    fontWeight: 'bold',
  },
})
