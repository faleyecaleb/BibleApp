import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, ImageBackground, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
const { width, height } = Dimensions.get('screen');

const data = [
  { image: require('../../src/assets/images/about.jpg'), text: 'English Version', navigate: 'HomeScreen' },
  { image: require('../../src/assets/images/yoruba.jpg'), text: 'Yoruba Version', navigate: 'Yoruba' },
  { image: require('../../src/assets/images/quiz.jpg'), text: 'Play Quiz', navigate: 'Quiz' },
  { image: require('../../src/assets/images/image1.jpg'), text: 'About Us', navigate: 'About' },

];

const imageW = width * 0.7;
const imageH = imageW * 1.54;

const FirstScreen = ({ navigation }) => {
  const handleNavigaion = (e) => {
    navigation.navigate(e)
  }
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar barStyle={'dark-content'} animated={true} translucent backgroundColor={COLORS.transparent} />
      <View style={StyleSheet.absoluteFillObject}>

        {
          data.map((image, index) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ]
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0, 1, 0]
            })
            return <Animated.Image
              key={`image-${index}`}
              source={image.image}
              resizeMode={'contain'}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  opacity
                }
              ]}
              blurRadius={40}
            />

          })

        }
      </View>
      <Animated.FlatList
        horizontal
        pagingEnabled
        onScroll={
          Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )

        }
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => {
          return <View style={{
            width, justifyContent: 'center', alignItems: 'center',
            shadowColor: '#000',
            shadowOpacity: 1,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 20,

          }}>
            <ImageBackground borderRadius={15} source={item.image} style={{
              width: imageW,
              height: imageH,
              resizeMode: 'cover',
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15,

              }}>

                <View style={{
                  flexDirection: 'row',
                }}>
                  <Icon name='arrow-back-ios' color={COLORS.grey} size={20} />
                  <Icon name='arrow-back-ios' color={COLORS.grey} size={20} />
                  <Icon name='arrow-back-ios' color={COLORS.grey} size={20} />
                </View>
                <Text style={{ color: COLORS.grey, fontSize: 15, fontWeight: 'bold' }}>Swipe Left</Text>
              </View>
              <TouchableOpacity onPress={() => handleNavigaion(item.navigate)} style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
              }}>
                <Text style={{
                  color: COLORS.white,
                  fontSize: 18,
                  fontWeight: 'bold',
                  borderWidth: 1,
                  borderColor: COLORS.white,
                  borderRadius: 5,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  elevation: 10,
                  backgroundColor: COLORS.gradientDark
                }}>{item.text}</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        }}
      />
    </View>
  )
}

export default FirstScreen