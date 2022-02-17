import { StyleSheet, Text, SafeAreaView, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { Colors } from '../theme'
import SelectionHomeRow from '../components/SelectionHomeRow'

const Home = () => {
    const [selectedScreen, setSelectedScreen] = useState('Explore')
    const lightMode = useColorScheme()

    return (
        <View style={{ flex: 1, backgroundColor: lightMode == 'dark' ? Colors.backgroundDark : Colors.white }}>
            <Header />
            <SelectionHomeRow selected={selectedScreen} setSelected={setSelectedScreen} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})