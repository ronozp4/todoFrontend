import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import backIcon from '../assets/icons/back.png'
import { useNavigation } from '@react-navigation/native'
import { screens } from '../utils/constants'

const BackButton = () => {
    const nav = useNavigation()

  return (
    <TouchableOpacity style={styles.button} onPress={() => nav.navigate(screens.HOME)}>
        <Image style={styles.icon} source={backIcon } />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
    },
    button: {
        position: 'absolute',
        top: 30,
        right: 30,
    }
})


