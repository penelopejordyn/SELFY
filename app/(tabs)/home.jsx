import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const home = () => {
  return (
    <>
    <View>
      <Text>home</Text>
    </View>
    <Link href="/" style={{color: 'blue'}}>go back</Link>
    </>
  )
}

export default home