import { View, Text, useWindowDimensions, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// import Part1 from './Part1';
// import Part2 from './Part2';
import COLORS from '../../consts/colors';
import DiscussionTab from '../../components/DiscussionTab';





// const renderScene = SceneMap({
//   first: Part1,
//   second: Part2,
// })

const Discussions = () => {
  // const layout = useWindowDimensions();
  // const [index, setIndex] = React.useState(0);

  // const [routes] = React.useState([
  //   {key: 'first', title: 'Part 1'},
  //   {key: 'second', title: 'Part 2'}
  // ])

  // const renderTabBar = props => {
  //   return (
  //     <TabBar
  //       {...props}
  //       renderLabel={({ focused, route }) => {
  //         return (
  //           <Text style={{color: focused ? COLORS.gradientLight : COLORS.dark, fontSize: 18}}>
  //             {route.title}
  //           </Text>
  //         );
  //       }}
  //       indicatorStyle={styles.indicatorStyle}
  //       style={styles.tabBar}
  //     />
  //   );
  // };


  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.gradientDark} />
      <View style={styles.header}>
        <Text style={styles.headerText}>An Overview of the book of Genesis</Text>
        <Text style={{color: COLORS.white, fontSize: 15}}>Week 1</Text>
      </View>
      {/* <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      showPageIndicator={true}
      /> */}

      <DiscussionTab />
     
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
  
  // indicatorStyle: {
  //   backgroundColor: COLORS.gradientLight,
  //   padding: 1.5,
  //   marginBottom: -2,
  // },

  // tabBar: {
  //   backgroundColor: COLORS.white,
  //   borderBottomWidth: 1,
  //   borderColor: COLORS.white,
  //   marginBottom: 20
    
  // },
})

export default Discussions