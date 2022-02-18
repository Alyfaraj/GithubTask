import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Dimensions } from '../theme';
import SelectionButton from './SelectionButton'

import { ModalDatePicker } from 'react-native-material-date-picker';
import DatePicker from './DatePicker';


const RepositoriesSection = () => {
  const lightMode = useColorScheme()
  const styles = { ...sharedStyles(lightMode) };
  const [date, setDate] = useState(new Date())

  return (
    <View>
      <Text style={styles.title} >Repositories</Text>
      <View style={styles.pickerRow} >
        <SelectionButton title='any' label='language' />
        <DatePicker date={date} setDate={setDate}  />
      </View>

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

