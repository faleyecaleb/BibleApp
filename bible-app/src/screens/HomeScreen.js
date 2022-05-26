import { Text, View, SafeAreaView, StatusBar, FlatList, StyleSheet, TextInput, } from 'react-native'
import { useState } from 'react';
import WeeksCard from '../components/WeeksCard';
import COLORS from '../consts/colors';


const dataList = ['Week One', 'Week Two', 'Week Three', 'Week Four', 'Week Five', 'Week Six', 'Week Seven', 'Week Eight', 'Week Nine', 'Week Ten', 'djkslf', 'ksljdfs', 'dksd']

const HomeScreen = ({navigation}) => {
  const [allUser, setAllUser] = useState(dataList);
  const [filteredUser, setFilteredUser] = useState(dataList)

  const searchUser = (text) => {
    const newFilteredUser = filteredUser.filter((user) => user.includes(text))
    setFilteredUser([newFilteredUser])
  }

  return(
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.gradientDark}}>
      <StatusBar animated={true} translucent={false} backgroundColor={COLORS.gradientDark} barStyle='dark-content' />
      <View style={style.header}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.white}}>Table Of Contents</Text>
      </View>
      <View style={style.searchContainer}>
        
        <TextInput 
        placeholder='Search by book name...'
        style={style.input} onChangeText={(text) => searchUser(text)} />
      </View>

      <FlatList data={filteredUser} renderItem={(data) => <WeeksCard card={data} navigation={navigation} />} />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  header: {
    backgroundColor: COLORS.gradientDark,
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'

  },

  searchContainer: {
    backgroundColor: COLORS.gradientLight,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 5,


  },

  input: {
    color: COLORS.dark, 
    fontSize: 16, 
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
  }
})

export default HomeScreen