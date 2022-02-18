import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    useColorScheme,
    ScrollView
} from "react-native";
import { Icon } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import { Dimensions, Colors } from "../theme";



const LanguagesModal = ({ visible, onClose, onPress }) => {
    const lightMode = useColorScheme()
    const styles = { ...sharedStyles(lightMode) };
    const [languagesList, setLanguageList] = useState(list)



    const handelSearchInList = (searchWord) => {
        let searchResult = list.filter(o =>
            Object.keys(o).some(k => o.name.includes(searchWord))
        );
        setLanguageList(searchResult)
    }


    return (
        <Modal transparent visible={visible} animationType="fade">
            <TouchableOpacity
                //  onPress={onClose}
                activeOpacity={1}
                style={{
                    flex: 1,
                    alignItems: "center",
                    backgroundColor: Colors.transparent,
                    justifyContent: "center"
                }}
            >
                <View style={styles.contianer} >
                    <View style={styles.row} >
                        <Text style={styles.selectText} >Select Language</Text>
                        <Icon onPress={onClose} name="closecircle" size={18} type="ant-design" color={lightMode == 'dark' ? '#ccc' : Colors.backgroundDark} />
                    </View>
                    <TextInput onChangeText={handelSearchInList} placeholder="Filter languages" style={styles.input} />
                    <ScrollView>
                        {languagesList.map(item => (
                            <TouchableOpacity activeOpacity={.8} onPress={() => onPress(item.name)} style={styles.itemContainer} key={item.count} >
                                <Text style={styles.text} >{item.name}</Text>
                            </TouchableOpacity>))}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const sharedStyles = (lightMode) => StyleSheet.create({
    contianer: {
        width: Dimensions.DEVICE_WIDTH * 0.87,
        maxHeight: Dimensions.DEVICE_HEIGHT * .7,
        minHeight: Dimensions.DEVICE_HEIGHT * 0.7,
        paddingVertical: Dimensions.DEVICE_HEIGHT * 0.025,
        backgroundColor: lightMode == 'dark' ? Colors.semiBlack : Colors.white,
        borderRadius: Dimensions.DEVICE_WIDTH * 0.05,
        //   justifyContent: "space-around",
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
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.DEVICE_WIDTH * .75,
        alignSelf: 'center'
    },
    input: {
        paddingVertical: 14,
        width: Dimensions.DEVICE_WIDTH * .75,
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: .4,
        borderColor: lightMode == 'dark' ? Colors.white : Colors.backgroundDark,
        color: lightMode == 'dark' ? Colors.white : Colors.backgroundDark,
        paddingStart: Dimensions.DEVICE_WIDTH * .03,
        marginVertical: 10
    },
    selectText: {
        fontWeight: '600',
        marginVertical: 10,
        fontSize: 16,
        fontFamily: 'Silka',
        color: lightMode == 'dark' ? Colors.white : Colors.backgroundDark,
    }


});

export default LanguagesModal;



const list = [
    {
        name: 'HTML',
        id: 1
    },
    {
        name: 'CSS',
        id: 2
    },
    {
        name: 'C++',
        id: 3
    },
    {
        name: 'Java',
        id: 4
    }, {
        name: 'C+',
        id: 5
    }, {
        name: 'Javascript',
        id: 6
    }, {
        name: 'Typescript',
        id: 7
    }, {
        name: 'C#',
        id: 8
    }, {
        name: 'Ruby',
        id: 9
    }, {
        name: 'Swift',
        id: 10
    }, {
        name: 'R',
        id: 11
    }, {
        name: 'Python',
        id: 12
    }, {
        name: 'SQL',
        id: 13
    }, {
        name: 'Kotlin',
        id: 14
    }, {
        name: 'Lua',
        id: 15
    }, {
        name: 'PHP',
        id: 16
    }
]
