import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    useColorScheme
} from "react-native";
import { Dimensions, Colors } from "../theme";



const TopModal = ({ visible, onClose, onPress }) => {
    const lightMode = useColorScheme()
    const styles = { ...sharedStyles(lightMode) };

    const list = [
        {
            name: 'Top 10',
            count: 10

        },
        {
            name: 'Top 50',
            count: 50
        },
        {
            name: 'Top 100',
            count: 100
        }

    ]

    return (
        <Modal transparent visible={visible} animationType="fade">
            <TouchableOpacity
                onPress={onClose}
                activeOpacity={1}
                style={{
                    flex: 1,
                    alignItems: "center",
                    backgroundColor: Colors.transparent,
                    justifyContent: "center"
                }}
            >
                <View style={styles.contianer} >
                    {list.map(item => (
                        <TouchableOpacity onPress={() => onPress(item)} style={styles.itemContainer} key={item.count} >
                            <Text style={styles.text} >{item.name}</Text>
                        </TouchableOpacity>))}
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const sharedStyles = (lightMode) => StyleSheet.create({
    contianer: {
        width: Dimensions.DEVICE_WIDTH * 0.87,
        minHeight: Dimensions.DEVICE_HEIGHT * 0.1,
        paddingVertical: Dimensions.DEVICE_HEIGHT * 0.025,
        backgroundColor: lightMode == 'dark' ? Colors.semiBlack : Colors.white,
        borderRadius: Dimensions.DEVICE_WIDTH * 0.05,
        justifyContent: "space-around",
        paddingHorizontal: Dimensions.DEVICE_WIDTH * 0.04,
        borderWidth: .2,
        borderColor: Colors.white

    },
    text: {
        fontWeight: '500',
        marginVertical: 10,
        fontSize: 16,
        fontFamily: 'Silka',
        color: lightMode == 'dark' ? Colors.white : Colors.backgroundDark,
        marginStart: Dimensions.DEVICE_WIDTH * .02
    },
    itemContainer: {
        paddingBottom: 4,
        borderBottomWidth: .4,
        borderBottomColor: lightMode == 'dark' ? Colors.white : Colors.backgroundDark,
        marginBottom: 10
    }


});

export default TopModal;
