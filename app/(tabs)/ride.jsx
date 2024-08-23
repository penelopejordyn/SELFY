import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ride = () => {
  return (
    <>
    <View>
      <Text>ride</Text>
    </View>
    <Link href="/" style={{color: 'blue'}}>go back</Link>
    </>
  )
}

export default ride