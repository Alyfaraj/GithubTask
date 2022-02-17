import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors, Dimensions } from '../theme';
import { Icon } from 'react-native-elements';

const RepoItem = () => {
    const lightMode = useColorScheme()
    const styles = { ...sharedStyles(lightMode) };

    return (
        <View style={styles.container} >
            <View style={styles.nameRow} >
                <Icon color={Colors.lightGreen} size={20} name='book' type='ant-design' />
                <Text style={styles.repoName} >AlyFaraj/GitHubTask</Text>
            </View>
            <Text style={styles.description} >Lorem Ipsum is simply dummy text of the
                printing and tvpesettina industrv. Lorem Ipsum
                has been the industry's.
            </Text>
            <View style={styles.detailsSection} >
                <Text style={styles.language} >C++</Text>
                <View style={{ alignItems: 'center', flexDirection: 'row' }} >
                    <Icon size={17} color={Colors.lightGreen} name='star-o' type='font-awesome' />
                    <Text style={styles.language} >{' '}4000</Text>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row' }} >
                    <Icon size={14} color={Colors.lightGreen} name='fork' type='ant-design' />
                    <Text style={styles.language}>{' '}C++</Text>
                </View>
            </View>
        </View>
    )
}

const sharedStyles = (lightMode) => StyleSheet.create({
    container: {
        width: Dimensions.DEVICE_WIDTH * .9,
        backgroundColor: lightMode == 'dark' ? Colors.semiBlack : Colors.white,
        shadowOpacity: .1,
        shadowOffset: { height: 2, width: 4 },
        elevation: 2,
        paddingVertical: 22,
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 16,
        borderWidth: .2,
        borderColor: Colors.white
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: Dimensions.DEVICE_WIDTH * .03,
        marginBottom: 16
    },
    repoName: {
        fontFamily: 'Silka',
        fontWeight: '600',
        fontSize: 17,
        color: lightMode == 'dark' ? Colors.white : Colors.primary,
        marginStart: Dimensions.DEVICE_WIDTH * .02
    },
    description: {
        fontFamily: 'Silka',
        fontWeight: '400',
        fontSize: 14,
        color: lightMode == 'dark' ? Colors.white : Colors.semiBlack,
        marginStart: Dimensions.DEVICE_WIDTH * .045,
        maxWidth: Dimensions.DEVICE_WIDTH * .8,
        opacity: .8,
        marginBottom:5
    },
    detailsSection: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.DEVICE_WIDTH * .8,
        alignSelf: 'center',
        borderTopWidth: .2,
        borderTopColor: lightMode == 'dark' ? Colors.white : Colors.semiBlack,
        marginTop: 13,
        paddingTop: 16,
        justifyContent: 'flex-start'
    },
    language: {
        fontFamily: 'Silka',
        fontWeight: '500',
        fontSize: 15,
        color: lightMode == 'dark' ? Colors.white : Colors.semiBlack,
        marginEnd: Dimensions.DEVICE_WIDTH * .05,
        maxWidth: Dimensions.DEVICE_WIDTH * .8,
    }

})


export default RepoItem

