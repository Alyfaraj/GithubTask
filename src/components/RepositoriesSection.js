import { ActivityIndicator, FlatList, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Dimensions } from '../theme';
import SelectionButton from './SelectionButton'
import DatePicker from './DatePicker';
import LanguagesModal from './LanguagesModal';
import { getRepositories } from '../sotre/actions/repositories';
import RepoItem from './RepoItem'
import { useDispatch, useSelector } from 'react-redux';

const RepositoriesSection = () => {
  const lightMode = useColorScheme()
  const styles = { ...sharedStyles(lightMode) };
  const [date, setDate] = useState(new Date())
  const [showLanModal, setShowLangModal] = useState(false)
  const [language, setLanguage] = useState(null)
  const { repostories, loading } = useSelector(state => state.repositories)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getRepositories(language, date))
  }, [date, language])


  if (loading) return <ActivityIndicator style={{marginTop:Dimensions.DEVICE_HEIGHT*.3}} size='large' />

  return (
    <View style={{flex:1}} >
      <Text style={styles.title} >Repositories</Text>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <View style={styles.pickerRow} >
              <SelectionButton title={language ? language : 'Any'} label='language' onPress={() => setShowLangModal(true)} />
              <DatePicker date={date} setDate={setDate} />
            </View>
            <LanguagesModal onPress={(name) => {
              setLanguage(name)
              setShowLangModal(false)
            }} visible={showLanModal} onClose={() => setShowLangModal(false)} />

          </View>
        )}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => <RepoItem {...item} />}
        data={repostories}

      />
    </View>
  )
}

const sharedStyles = (lightMode) => StyleSheet.create({
  pickerRow: {
    flexDirection: 'row',
    width: Dimensions.DEVICE_WIDTH * .9,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'Silka',
    color: lightMode == 'dark' ? Colors.white : Colors.backgroundDark,
    fontWeight: '600',
    fontSize: 20,
    marginTop: 20,
    marginStart: Dimensions.DEVICE_WIDTH * .06,

  }
})

export default RepositoriesSection

