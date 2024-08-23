import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from './../../utils/asyncStorage';
import { router } from 'expo-router';

const {width, height} = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = async ()=>{
        await setItem('onboarded', '1');
        router.replace('/home');
    }

    const doneButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
        
    }
  return (
    <View style={styles.container}>
      <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            // bottomBarHighlight={false}
            DoneButtonComponent={doneButton}
            containerStyles={{paddingVertical: 50}}
            pages={[
                {
                    backgroundColor: '#0bd4b1',
                    image: (
                        <View style={styles.lottie}>
                            <LottieView source={require('./../../assets/animations/Animation - 1724188635919.json')}
                             style={{width: width, height: width, alignSelf: 'center', justifyContent: 'center'}}
                             autoPlay
                             loop
                            />
                        </View>
                    ),
                    title: 'SET YOUR OWN RATES',
                    subtitle: 'Drivers take control of their earnings by setting prices that reflect their value. With TREK, drivers decide how much thy should be paid for every ride or package delivery!',
                },
                {
                    backgroundColor: '#fe3886',
                    image: (
                        <View style={styles.lottie}>
                            <LottieView source={require('./../../assets/animations/Animation - 1724189128763.json')}
                             style={{width: width, height: width, alignSelf: 'center', justifyContent: 'center'}}
                             autoPlay
                             loop
                            />
                        </View>
                    ),
                    title: 'RIDE WITH FREEDOM',
                    subtitle: 'As a rider, you will be able to join a community of drivers who are dedicated to providing the best service possible. You can choose your driver based on their ratings and reviews or price you are willing to pay. Set your price and move freely on your own terms with TREK.',
                },
                {
                    backgroundColor: '#607385',
                    image: (
                        <View style={styles.lottie}>
                            <LottieView source={require('./../../assets/animations/onboard1.json')}
                             style={{width: width, height: width, alignSelf: 'center', justifyContent: 'center'}}
                             autoPlay
                             loop
                            />
                        </View>
                    ),
                    title: 'PAY LESS AND EARN MORE',
                    subtitle: 'TREK ensures that drivers keep 100% of their earnings. Riders can also pay less than they would with traditional ride-hailing services. With TREK, everyone wins!',
                },
            ]}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lottie:{
        width: width*0.9,
        height: width
    },
    doneButton: {
        padding: 20,
        // backgroundColor: 'white',
        // borderTopLeftRadius: '100%',
        // borderBottomLeftRadius: '100%'
    }
})
