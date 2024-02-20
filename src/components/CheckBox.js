import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import uncheckedbox from '../assets/icons/checkbox/unchecked-checkbox.png'
import checkedbox from '../assets/icons/checkbox/checkbox.png'

const CheckBox = () => {
    const [checked, setChacked] = useState(false)
  return (
    <TouchableOpacity onPress={() => setChacked(!checked)}>
        <Image style={styles.icon} source={checked? checkedbox: uncheckedbox } />
    </TouchableOpacity>
  )
}

export default CheckBox

const styles = StyleSheet.create({
    icon: {
        width: 40,
        height: 40
    }
})