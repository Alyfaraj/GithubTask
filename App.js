import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from './src/theme/Colors'

const App = () => {

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }} >
     <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})