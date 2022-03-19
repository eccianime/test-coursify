import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import BaseNavigator from './src/navigators/BaseNavigator';
import React, { useEffect, useState } from 'react';
import { loadAsync } from 'expo-font';
import { CUSTOM_FONTS_LOCATION } from './src/utils';

const Home = () => {
  const [loaded, ready] = useState<boolean>(false);
  const _loadAssetsAsync = async () => {
    await loadAsync(CUSTOM_FONTS_LOCATION);
    ready(true);
  }
  useEffect(() => {
    _loadAssetsAsync();
  }, []);
  return (
    loaded ?
      <NavigationContainer>
        <StatusBar hidden />
        <BaseNavigator />
      </NavigationContainer>
      : <AppLoading />
  );
}

export default Home;