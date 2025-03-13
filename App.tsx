/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import Home from './src/screens/Home';
import StackRouter from './src/routers/StackRouter';
import { SafeAreaView } from 'react-native-safe-area-context';
if (__DEV__) {
  require("./ReactotronConfig");
}
function App(): React.JSX.Element {
  return (
    <SafeAreaView>
    <View style={{height:'100%'}}>
      <StackRouter/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
