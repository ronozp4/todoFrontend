import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import uncheckedbox from '../assets/icons/checkbox/unchecked-checkbox.png'
import checkedbox from '../assets/icons/checkbox/checkbox.png'
import { observer } from 'mobx-react-lite'
import store from '../stores/mobxStore'
import { updateTask } from '../api/apiService'

const CheckBox = ({index}) => {
    const theTask = store.todolist[index]

    const toggleCheckbox = ()=> {
        updateTask({done: !theTask?.done}, theTask?._id)
        store.updateTaskById(index, {done: !theTask?.done})
    }
  return (
    <TouchableOpacity onPress={toggleCheckbox}>
        <Image style={styles.icon} source={theTask?.done ? checkedbox: uncheckedbox } />
    </TouchableOpacity>
  )
}

export default observer(CheckBox) 

const styles = StyleSheet.create({
    icon: {
        width: 40,
        height: 40
    }
})