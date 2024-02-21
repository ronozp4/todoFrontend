import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import EditIcons from './EditIcons'
import CheckBox from './CheckBox'
import store from '../stores/mobxStore'
import { observer } from 'mobx-react-lite'

const TaskItem = ({index}) => {
    const [isOpen, setIsOpen] = useState(false)
    const theTask = store.todolist[index]
  return (
    <>
    <View style={styles.main}>
    <EditIcons index={index} />
        <TouchableOpacity onPress={()=>setIsOpen(!isOpen)} style={styles.container}>
        <Text style={[styles.title, theTask?.done && {textDecorationLine: 'line-through'}]}>{theTask?.title}</Text>
        </TouchableOpacity>
    <CheckBox index={index} />
    </View>
            {isOpen && theTask?.description ? <View style={[styles.container,{width: '90%', alignSelf: 'center'}]}>
            <Text>{theTask?.description}</Text>
        </View>: null}
        </>
  )
}

export default observer(TaskItem) 

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        gap: 10
    },
    container: {
        width: '60%',
        backgroundColor: 'rgba(0,100,100,.2)',
        marginBottom: 15,
        borderRadius: 5,
        padding: 5
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        textDecorationColor: 'red',
    }
})