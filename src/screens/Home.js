import { StyleSheet, Text, SafeAreaView, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../theme'
import { SelectionHomeRow, Header, ExploreSection, RepositoriesSection } from '../components'

const Home = () => {
    const [selectedScreen, setSelectedScreen] = useState('Explore')
    const lightMode = useColorScheme()

    return (
        <View style={{ flex: 1, backgroundColor: lightMode == 'dark' ? Colors.backgroundDark : Colors.white }}>
            <Header />
            <SelectionHomeRow selected={selectedScreen} setSelected={setSelectedScreen} />
            {selectedScreen == 'Explore' ? <ExploreSection /> : <RepositoriesSection />}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})