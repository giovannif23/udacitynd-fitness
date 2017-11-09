import React from 'react'
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { white, orange, red, blue, lightPurp, purple, pink } from '../utils/colors'

export default function UdaciSteppers ({ max, unit, step, value, onIncrement, onDecrement }) {
  return (
    <View style={[styles.row, {justifyContent: 'space-between'}]}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
          onPress={onDecrement}>
          <FontAwesome name='minus' size={30} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
          onPress={onIncrement}>
          <FontAwesome name='plus' size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={styles.metricCounter}>
        <Text style={{fontSize: 24,}}>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  iosBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  androidBtn: {
    margin: 5,
    padding: 10,
    borderRadius: 2,
    backgroundColor: purple,
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
