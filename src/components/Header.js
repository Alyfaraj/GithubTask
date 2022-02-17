import { StyleSheet, Text, Image, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors, Dimensions } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'

const Header = () => {
    const lightMode = useColorScheme()
    return (
        <SafeAreaView style={[styles.container, {
            backgroundColor: lightMode == 'dark' ? Colors.semiBlack : Colors.white
        }]} >
            <Image style={styles.image} source={lightMode == 'dark' ? require('../assets/images/lightLogo.png') : require('../assets/images/darkLogo.png')} />
            <Icon name='search' size={27} color={lightMode == 'dark' ? Colors.white : Colors.semiBlack} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.DEVICE_WIDTH,
        paddingHorizontal: Dimensions.DEVICE_WIDTH * .05,
        paddingTop: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Silka',
        fontSize: 24,
        fontWeight: '800',
        color: Colors.primary
    },
    image: { width: 112, height: 24, resizeMode: 'contain' }
})

export default Header

