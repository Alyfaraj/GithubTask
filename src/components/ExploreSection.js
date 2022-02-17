import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Dimensions } from '../theme';
import SelectionButton from './SelectionButton';
import TopModal from './TopModal';

const ExploreSection = () => {
    const lightMode = useColorScheme()
    const styles = { ...sharedStyles(lightMode) };
    const [showTopModal, setShowTopModal] = useState(false)
    const [selectedTop, setSelectedTop] = useState({ name: 'Top 10', count: 10 })


    return (
        <View>
            <Text style={styles.title} >Explore Popular</Text>
            <SelectionButton onPress={() => setShowTopModal(true)} style={{ marginStart: Dimensions.DEVICE_WIDTH * .06 }} title={selectedTop.name} />
            <TopModal
                onClose={() => setShowTopModal(false)}
                visible={showTopModal}
                onPress={selected => {
                    setSelectedTop(selected)
                    setShowTopModal(false)
                }}
            />
        </View>
    )
}

const sharedStyles = (lightMode) => StyleSheet.create({

    title: {
        fontFamily: 'Silka',
        color: lightMode == 'dark' ? Colors.white : Colors.backgroundDark,
        fontWeight: '600',
        fontSize: 20,
        marginTop: 20,
        marginStart: Dimensions.DEVICE_WIDTH * .06,

    }
})

export default ExploreSection

