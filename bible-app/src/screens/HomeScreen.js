import { Text, View, TouchableOpacity, SafeAreaView, StatusBar, FlatList, StyleSheet, TextInput, useWindowDimensions, } from 'react-native'
import { useState } from 'react';
import WeeksCard from '../components/WeeksCard';
import COLORS from '../consts/colors';
import BOOKPAGE from '../bookData/book';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  const [showSearch, setShowSearch] = useState(false);
  const width = useWindowDimensions().width;


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gradientDark, width: width }}>
      <StatusBar animated={true} translucent={false} backgroundColor={COLORS.gradientDark} barStyle='light-content' />
      <View style={style.header}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Icon size={30} color={COLORS.white} name='home' />
          <Text style={{ fontSize: 25, marginLeft: 10, fontWeight: 'bold', color: COLORS.white }}>Home</Text>
        </View>
        <View>
          <TouchableOpacity>
            {
              !showSearch &&
              <Icon name='search' size={25} color={COLORS.white} />
            }
          </TouchableOpacity>
        </View>
      </View>
      {
        showSearch &&
        <View style={style.searchContainer}>
          <TouchableOpacity onPress={() => alert('COMING SOON...')}>
            <Icon style={{ backgroundColor: COLORS.gradientDark, paddingHorizontal: 4, paddingVertical: 1.8, borderRadius: 1 }} size={35} color={COLORS.white} name='search' />
          </TouchableOpacity>
        </View>
      }
      <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
        <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold' }}>Table Of Contents</Text>
      </View>

      <FlatList keyExtractor={(item, index) => index.toString()} data={BOOKPAGE} renderItem={(content) => <WeeksCard books={content.item} card={content.item} navigation={navigation} />} />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  header: {
    backgroundColor: COLORS.gradientDark,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'

  },

  searchContainer: {
    backgroundColor: COLORS.gradientLight,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'


  },

  input: {
    color: COLORS.dark,
    fontSize: 16,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flex: 1
  }
})

export default HomeScreen