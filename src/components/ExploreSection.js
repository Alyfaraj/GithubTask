import { ActivityIndicator, FlatList, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Dimensions } from '../theme';
import SelectionButton from './SelectionButton';
import TopModal from './TopModal';
import PopularItem from './PopularItem';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { getPopular } from '../sotre/actions/popular';
import { useSelector } from 'react-redux';


const ExploreSection = () => {
    const lightMode = useColorScheme()
    const styles = { ...sharedStyles(lightMode) };
    const [showTopModal, setShowTopModal] = useState(false)
    const [selectedTop, setSelectedTop] = useState({ name: 'Top 10', count: 10 })
    const { repostories, loading } = useSelector(state => state.popular)
    const dispatch = useDispatch()




    useEffect(() => {
        dispatch(getPopular(selectedTop.count))
    }, [selectedTop])


    if (loading) return <ActivityIndicator style={{marginTop:Dimensions.DEVICE_HEIGHT*.3}} size='large' />

    return (
        <View style={{flex:1}} >

            <FlatList
                ListHeaderComponent={() => (
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
                )}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) => <PopularItem {...item} />}
                data={repostories}

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

