import { Text, View, SafeAreaView, FlatList } from 'react-native'
import WeeksCard from '../components/WeeksCard'

const dataList = ['Week One', 'Week Two', 'Week Three', 'Week Four', 'Week Five', 'Week Six', 'Week Seven', 'Week Eight', 'Week Nine', 'Week Ten']

const HomeScreen = () => {
  return(
    <SafeAreaView>
      <View>
        
      </View>
      <FlatList data={dataList} renderItem={(data) => <WeeksCard />} />
    </SafeAreaView>
  )
}

export default HomeScreen