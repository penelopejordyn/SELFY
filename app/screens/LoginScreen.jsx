import { View, Text, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { router } from 'expo-router';
import LottieView from 'lottie-react-native'; 

const {width, height} = Dimensions.get('window');

const LoginScreen = () => {
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: '#212434'}}> 
      <SafeAreaView className="flex">
          <View className="flex-row justify-start">
            <TouchableOpacity onPress={()=> router.back()} className="bg-pink p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
              <ArrowLeftIcon size="25" color="black"/>
            </TouchableOpacity>
          </View>
          <View className="justify-center "> 
          <Text className="text-pink font-bold text-2xl">Login</Text>
          </View>
          <View className="my-20 flex-1 justify-center">
          <LottieView source={require('../../assets/animations/login.json')}
            style={{width: 350, height: 350, alignSelf: 'center', justifyContent: 'center'}}
            autoPlay
            loop
          />
      </View>
      </SafeAreaView>
      <View className="flex-1 bg-purple px-8 pt-8" style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <View className="form space-y-2">
          <Text className="text-yellow mb-2 font-semibold ml-4">Email Address</Text>
          <TextInput className="p-4 bg-gray text-gray-dark rounded-2xl" 
            placeholder='Enter Email'
          />
          <Text className="text-yellow mt-6 mb-2 font-semibold ml-4">Password</Text>
          <TextInput className="p-4 bg-gray text-gray-dark rounded-2xl" 
            secureTextEntry
            placeholder='Enter Password'
          />
          <TouchableOpacity className="flex items-end mb-5">
            <Text className="text-pink">Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-3 bg-pink rounded-xl">
            <Text className="font-xl font-bold text-center text-purple">
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="tex-xl text-pink font-bold text-center py-3">
          Or
        </Text>
        <View className="flex-row justify-center">
          <TouchableOpacity>

          </TouchableOpacity>
        </View>
      </View>
    </View>
    
  )
}

export default LoginScreen