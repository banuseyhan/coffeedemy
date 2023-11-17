import {View, Text, Animated} from 'react-native';
import React from 'react';
import styles from '../Styles/splashScreen';

const SplashScreen = () => {
  const imageScale = new Animated.Value(0.1);

  Animated.timing(imageScale, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/beans.png')}
        style={[styles.image, {transform: [{scale: imageScale}]}]}
      />
      <Text style={styles.text}>Coffeedemy</Text>
    </View>
  );
};

export default SplashScreen;
