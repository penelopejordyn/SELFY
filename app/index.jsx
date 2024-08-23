import React, { useEffect, useState } from 'react';
import './../globals.css'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/onboarding.jsx';
import { getItem } from '../utils/asyncStorage.js';
import { router } from 'expo-router';
import WelcomeScreen from './screens/WelcomeScreen.jsx';

export default function AppNavigation() {
return (
  <WelcomeScreen />
)

  // const [showOnboarding, setShowOnboarding] = useState(null);

  // useEffect(() => {
  //   checkIfAlreadyOnboarded();
  // }, []);

  // const checkIfAlreadyOnboarded = async () => {
  //   let onboarded = await getItem('onboarded');
  //   if (onboarded == 1) {
  //     // hide onboarding
  //     setShowOnboarding(false);
  //   } else {
  //     // show onboarding
  //     setShowOnboarding(true);
  //   }
  // };

  // useEffect(() => {
  //   if (showOnboarding === false) {
  //     router.replace('/home');
  //   }
  // }, [showOnboarding]);

  // if (showOnboarding === null) {
  //   return null; // Render nothing or a loading indicator until state is determined
  // }

  // return (
  //   showOnboarding ? <OnboardingScreen /> : null
  // );
}
