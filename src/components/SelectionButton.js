import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors, Dimensions } from '../theme';
import { Icon } from 'react-native-elements';

const SelectionButton = ({ title, onPress, style,label='View' }) => {
    const lightMode = useColorScheme()
    const styles = { ...sharedStyles(lightMode) };

    return (
        <TouchableOpacity style={[styles.container, { ...style }]} onPress={onPress} activeOpacity={.7} >
            <Text style={styles.text} >
                <Text style={{ opacity: .5 }} >{label}:  </Text>
                {title}
            </Text>
            <Icon name='down' type='ant-design' size={16} color={lightMode == 'dark' ? Colors.white : Colors.backgroundDark} />
        </TouchableOpacity>
    )
}

const sharedStyles = (lightMode) => StyleSheet.create({
    container: {
        width: Dimensions.DEVICE_WIDTH * .43,
        //  maxWidth: Dimensions.DEVICE_WIDTH * .45,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: lightMode == 'dark' ? Colors.semiBlack : Colors.white,
        marginTop: 16,
        shadowOpacity: .1,
        paddingVertical: 15,
        justifyContent: 'space-evenly',
        shadowOffset: { height: 1, width: 1 },
        elevation: 1,
        alignContent: 'center',
        borderWidth: .18,
        borderColor: Colors.backgroundLight,
    },
    text: {
        fontSize: 14,
        fontWeight: "500",
        color: lightMode == 'dark' ? Colors.white : Colors.backgroundDark
    }
})

export default SelectionButton

