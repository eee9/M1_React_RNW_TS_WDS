import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  const msg = 'r02, K6A. Hi, React, TypeScript, WDS.';
  console.log(msg)
  return (
    <View>
      <h3>This is HTML h3</h3>
      <div>div with msg: <br/><b>{msg}</b></div>
      <Text>"Text" component from the React Native here...</Text>
    </View>
  )
}
export default App;