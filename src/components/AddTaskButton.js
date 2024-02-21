import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Plus from '../assets/icons/plus-button.png'
import { useNavigation } from '@react-navigation/native';
import { screens } from '../utils/constants';

const AddTaskButton = () => {
    const nav = useNavigation();
  return (
    <TouchableOpacity onPress={() => nav.navigate(screens.TASK_CONTROL)} style={styles.button}>
        <Image style={styles.icon} width={10} height={30} source={Plus} />
    </TouchableOpacity>
  )
}

export default AddTaskButton

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    icon: {
        width: 100,
        height: 100

    }
})