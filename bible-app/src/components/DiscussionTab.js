import { Text, StyleSheet, useWindowDimensions } from 'react-native';
import React, { useContext } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Part1 from '../screens/discussionScreen/Part1';
import Part2 from '../screens/discussionScreen/Part2';
import COLORS from '../../src/consts/colors'
import { UserContext } from '../../src/screens/discussionScreen/UserContext'


const renderScene = SceneMap({
  first: Part1,
  second: Part2,
})


const DiscussionTab = ({ book }) => {
  const msg = useContext(UserContext)
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const [routes, setRoutes] = React.useState([
    { key: 'first', title: 'Part 1' },
    { key: 'second', title: 'Part 2' }
  ])

  React.useEffect(() => {
    if (msg.partOne) {
      setRoutes([{ key: 'first', title: 'Part 1' },
      { key: 'second', title: 'Part 2' }])
    } else {
      setRoutes([{ key: 'first', title: msg.name }])
    }
  }, [])

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        renderLabel={({ focused, route }) => {
          return (
            <Text style={{ color: focused ? COLORS.gradientLight : COLORS.dark, fontSize: 18 }}>
              {route.title}
            </Text>
          );
        }}
        indicatorStyle={styles.indicatorStyle}
        style={styles.tabBar}
      />
    );
  };

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      showPageIndicator={true}
    />
  )
}

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: COLORS.gradientLight,
    padding: 1.5,
    marginBottom: -2,
  },

  tabBar: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderColor: COLORS.white,
    marginBottom: 20

  },
})

export default DiscussionTab