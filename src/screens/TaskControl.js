import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { screens } from '../utils/constants';

const TaskControl = () => {
    const nav = useNavigation();

  return (
    <View>
      <Text>TaskControl</Text>
      <Button onPress={() => nav.navigate(screens.HOME)} title='BACK' />
    </View>
  )
}

export default TaskControl

const styles = StyleSheet.create({})