import { Text, View, SafeAreaView, StatusBar, FlatList } from 'react-native'
import WeeksCard from '../components/WeeksCard'
import COLORS from '../theme/colors'

const dataList = ['Week One', 'Week Two', 'Week Three', 'Week Four', 'Week Five', 'Week Six', 'Week Seven', 'Week Eight', 'Week Nine', 'Week Ten', 'djkslf', 'ksljdfs', 'dksd']

const HomeScreen = () => {
  return(
    <SafeAreaView>
      <StatusBar translucent={false} animated={true} backgroundColor={COLORS.gradientLight} barStyle='dark-content' />
      <View style={{flex: 1, paddingVertical: 10,}}>
        <Text>Table Of Contents</Text>
      </View>
      <FlatList data={dataList} stickyHeaderIndices={[0]} renderItem={(data) => <WeeksCard />} />
    </SafeAreaView>
  )
}

export default HomeScreen