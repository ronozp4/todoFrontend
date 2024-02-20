import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import EditIcons from './EditIcons'
import CheckBox from './CheckBox'

const TaskItem = ({task}) => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <View style={styles.main}>
    <EditIcons />
        <TouchableOpacity onPress={()=>setIsOpen(!isOpen)} style={styles.container}>
        <Text style={[styles.title, {textDecorationLine: 'line-through'}]}>{task?.title}</Text>
        </TouchableOpacity>
    <CheckBox />
    </View>
            {isOpen? <View style={[styles.container,{width: '90%', alignSelf: 'center'}]}>
            <Text>{task?.description}</Text>
        <Text>{task?.status}</Text>
        <Text>{task?.time}</Text>
        </View>: null}
        </>
  )
}

export default TaskItem

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