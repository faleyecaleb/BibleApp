import { View, Button, Text, Dimensions, TouchableOpacity, SafeAreaView, StyleSheet  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../consts/colors';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const DetailsCard = ({icon, title, nav}) => {
  return (
    <SafeAreaView>
      <View style={style.button}>
        <View style={style.detailsCardContainer}>
          <Icon name={icon} size={44} color={COLORS.white} />
          <Text style={{color: COLORS.white}}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  button: {
    alignItems: "center",
    marginHorizontal: 10,
    width: width * 0.37
  },

  detailsCardContainer: {
    backgroundColor: COLORS.gradientDark,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: height * 0.2,
    borderRadius: 15,
    elevation: 5,
  },

})

export default DetailsCard