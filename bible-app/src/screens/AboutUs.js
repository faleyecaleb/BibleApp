import { View, Text, SafeAreaView, ImageBackground, StatusBar, useWindowDimensions, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import COLORS from '../consts/colors';
import Team from '../components/Team';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AboutUs = ({ navigation }) => {
  const image = require('../assets/images/about.jpg');

  const height = useWindowDimensions().height;
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={COLORS.transparent} />

      <ScrollView>
        <ImageBackground source={image} resizeMode={'cover'} style={{
          height: height * 0.5,
          width: '100%'
        }}>
          <Icon onPress={() => navigation.goBack()} name='arrow-back' size={25} style={{ textAlign: 'right', marginVertical: 30, marginHorizontal: 20 }} color={COLORS.dark} />
        </ImageBackground>
        <View style={{
          alignItems: 'flex-start',
          marginVertical: 20,
          marginHorizontal: 15,
        }}>
          <Text selectable style={{
            color: COLORS.dark,
            fontSize: 22,
            marginBottom: 10,
            fontWeight: 'bold'
          }}>About The App</Text>
          <Text selectable style={{
            fontWeight: 'bold',
            color: COLORS.grey,
            lineHeight: 20,
          }}>The CAC Bible App is an app that was completely initiated and inspired by the Holy Spirit in a vision.
          </Text>
          <Text selectable style={{
            fontWeight: 'bold',
            color: COLORS.grey,
            lineHeight: 20,
            marginTop: 10
          }}>The major purpose of this app is to keep all CAC members across the globe connected to the light of the Word of God, to promote and propagate the Word of God to all nations, and also for all Non CAC members who are thirsty of the Word of God and want to be filled by God's Word.
          </Text>
        </View>
        <View style={{
          marginVertical: 5,
          marginHorizontal: 15,
        }}>
          <Text style={{
            fontWeight: 'bold',
            color: COLORS.dark,
            lineHeight: 20,
            marginTop: 5,
            fontSize: 22
          }}>Meet The App Team</Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginVertical: 20,
            flexWrap: 'wrap',
          }}>
            <Team name={'HOLY SPIRIT'} nameColor={'white'} titleColor={'white'} title={'Founder/Creator'} bgColor={'lightgreen'} iconColor={COLORS.light} iconName={'male'} />
            <Team name={'Faleye Daniel'} nameColor={COLORS.dark} titleColor={COLORS.dark} title={'Snr. Software Developer'} bgColor={'orange'} iconColor={COLORS.light} iconName={'male'} />
            <Team name={'Faleye Caleb'} nameColor={COLORS.dark} titleColor={COLORS.dark} title={'Software Developer'} bgColor={'orange'} iconColor={COLORS.light} iconName={'male'} />
            <Team name={'Oloruntola Ibukun'} nameColor={COLORS.dark} titleColor={COLORS.dark} title={'UI/UX Designer'} bgColor={'lightgreen'} iconColor={COLORS.light} iconName={'female'} />
          </View>

          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Need An App?</Text>
            <TouchableOpacity onPress={() => {
              Linking.openURL(
                'https://api.whatsapp.com/send?phone=23409058784051'
              )
            }} style={{
              backgroundColor: COLORS.blue,
              marginVertical: 10,
              width: '100%',
              elevation: 5,
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 2,
              alignItems: 'center',
              alignSelf: 'center'
            }}>
              <Text style={{ color: COLORS.white }}>Click Here To Contact Us</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default AboutUs