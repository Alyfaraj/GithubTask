import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors, Dimensions } from '../theme';
import { Icon } from 'react-native-elements';
import moment from 'moment';
import ShortNumber from '../utils/ShortNumber';

const PopularItem = ({full_name,description,updated_at,language,stargazers_count}) => {
    const lightMode = useColorScheme()
    const styles = { ...sharedStyles(lightMode) };

    return (
        <View style={styles.container} >
            <View style={[styles.nameRow, { justifyContent: 'space-between' }]} >
                <Text style={styles.trendingText} >Trending Repo</Text>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Icon size={14} color={Colors.lightGreen} name='star-o' type='font-awesome' />
                    <Text style={styles.language}>{' '}Star</Text>
                    <View style={styles.numberBackground} >
                        <Text style={styles.startCount} >{ShortNumber(stargazers_count)}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.nameRow} >
                <Icon color={Colors.lightGreen} size={20} name='book' type='ant-design' />
                <Text style={styles.repoName} >{full_name}</Text>
            </View>

            <Text style={styles.description} >{description}</Text>
            <View style={styles.detailsSection} >
                <Text style={styles.language} >Last Update {moment(new Date(updated_at)).fromNow()} {'  '} </Text>
                <Text style={styles.language} >{language}</Text>
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
        marginBottom: 5
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
        maxWidth: Dimensions.DEVICE_WIDTH * .8,
    },
    trendingText: {
        fontFamily: 'Silka',
        fontWeight: '400',
        fontSize: 13,
        color: lightMode == 'dark' ? Colors.white : Colors.semiBlack,
        marginStart: Dimensions.DEVICE_WIDTH * .02,
        opacity: .7
    },
    numberBackground: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: lightMode == 'dark' ? 'rgb(41,59,60)' : 'rgb(230,227,242)',
        marginEnd: 30,
        marginStart: 5,
        borderRadius: 5,
    },
    startCount:{
        fontFamily: 'Silka',
        fontWeight: '600',
        fontSize: 13,
        color: lightMode == 'dark' ? Colors.lightGreen : Colors.primary,
    }

})


export default PopularItem

