import {Text, View } from 'react-native'
import {Tabs, Redirect} from 'expo-router'
import React from 'react'


const TabsLayout = () => {
  return (
<>
<Tabs>
    <Tabs.Screen name="home"
    options={{
        title: 'Home',
        headerShown: false
    }}/>
    <Tabs.Screen name="drive"
    options={{
        title: 'Drive',
        headerShown: false
    }}/>
    <Tabs.Screen name="ride"
    options={{
        title: 'Ride',
        headerShown: false
    }}/>
</Tabs>
</>
  )
}

export default TabsLayout
