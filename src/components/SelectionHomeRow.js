import { Platform, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import { Dimensions, Colors } from '../theme'

const SelectionHomeRow = ({ selected, setSelected }) => {
    const lightMode = useColorScheme()
    const styles = { ...sharedStyles(lightMode) };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setSelected('Explore')} >
                <Text style={selected == 'Explore' ? styles.selectedText : styles.unSelectedText}>Explore</Text>
                {selected == 'Explore' && <View style={[styles.selectedBottom]} />}
            </TouchableOpacity  >
            <TouchableOpacity onPress={() => setSelected('Repositories')}
                style={{ marginStart: Dimensions.DEVICE_WIDTH * .05 }} >
                <Text style={[selected !== 'Explore' ? styles.selectedText : styles.unSelectedText]} >Repositories</Text>
                {selected !== 'Explore' && <View style={styles.selectedBottom} />
                }
            </TouchableOpacity>
        </View>
    )
}

const sharedStyles = (lightMode) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingStart: Dimensions.DEVICE_WIDTH * .05,
        width: Dimensions.DEVICE_WIDTH,
        backgroundColor: lightMode == 'dark' ? Colors.semiBlack : Colors.white
    },
    unSelectedText: {
        fontFamily: 'Silka',
        fontSize: 16,
        fontWeight: '400',
        color: lightMode == 'dark' ? Colors.white : Colors.backgroundDark,
    },
    selectedText: {
        fontFamily: 'Silka',
        fontSize: 16,
        fontWeight: Platform.OS == 'android' ? '800' : '600',
        color: lightMode == 'dark' ? Colors.white : Colors.primary
    },
    selectedBottom: {
        borderBottomWidth: 1,
        marginTop: 16,
        borderBottomColor: Colors.lightGreen
    }
})
export default SelectionHomeRow

