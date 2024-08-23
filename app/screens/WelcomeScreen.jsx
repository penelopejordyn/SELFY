import { View, Text, Dimensions, StatusBar} from 'react-native';
import './../../globals.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { router } from 'expo-router';

const {width, height} = Dimensions.get('window');
<StatusBar style="auto"/>
const WelcomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#212434' }}>
       <StatusBar
       statusbarStyle="default"
        backgroundColor="transparent"
        hidden={true}
        translucent={true}
      />
    <SafeAreaView style={{ flex: 1, backgroundColor: '#212434' }}>
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-pink font-bold text-4xl text-center">
          Welcome To TRYP
        </Text>
        <Text className="text-yellow font-bold text-4xl text-center">
          Let's Get Started!
        </Text>
        <View className="flex-row justify-center">
        <LottieView source={require('../../assets/animations/welcome.json')}
                             style={{width: width, height: width, alignSelf: 'center', justifyContent: 'center'}}
                             autoPlay
                             loop
                            />
        </View>
        <View className="space-y-5">
          <TouchableOpacity onPress={()=> router.push('/screens/LoginScreen')} className="py-3 bg-purple mx-7 rounded-xl">
            <Text className="text-xl font-bold text-center text-gray">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center py-3">
            <Text className="text-gray font-semibold">
              Already have an account?
            </Text>
            <Text> </Text>
            <TouchableOpacity onPress={()=> router.push('/screens/LoginScreen')}>
              <Text className="font-semibold text-yellow">
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;
