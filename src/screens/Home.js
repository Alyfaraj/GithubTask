import { StyleSheet, Text, SafeAreaView, useColorScheme, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Colors } from '../theme'

const Home = () => {
    const lightMode = useColorScheme()

    return (
        <View style={{ flex: 1, backgroundColor: lightMode == 'dark' ? Colors.white : Colors.white }}>
            <Header />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})