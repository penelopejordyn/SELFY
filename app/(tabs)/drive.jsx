import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const drive = () => {
  return (
    <>
    <View>
      <Text>drive</Text>
    </View>
    <Link href="/" style={{color: 'blue'}}>go back</Link>
    </>
  )
}

export default drive