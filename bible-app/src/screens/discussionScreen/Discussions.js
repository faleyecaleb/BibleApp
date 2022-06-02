import { View, Text, useWindowDimensions, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { UserContext } from '../../screens/discussionScreen/UserContext';
import COLORS from '../../consts/colors';
import DiscussionTab from '../../components/DiscussionTab';


export const Discussions = ({navigation, route}) => {
  const [books, setBooks] = React.useState(route.params);
  const msg = React.useContext(UserContext)
    
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' animated={true} backgroundColor={COLORS.gradientDark} />
      <View style={styles.header}>
        <Text style={styles.headerText}>{books.title}</Text>
      </View>

      <UserContext.Provider value={books}>
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
