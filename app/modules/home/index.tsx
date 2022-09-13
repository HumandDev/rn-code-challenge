import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
