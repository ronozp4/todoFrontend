import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import EditIcon from '../assets/icons/edit-64.png'
import DeleteIcon from '../assets/icons/delete-100.png'
import { screens } from '../utils/constants';
import { useNavigation } from '@react-navigation/native';
import store from '../stores/mobxStore';
import { deleteTask } from '../api/apiService';

const EditIcons = ({index}) => {
    const nav = useNavigation()

    const handleDelete = ()=> {
        deleteTask(store.todolist[index]?._id)
        store.deleteTask(index)
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleDelete} style={styles.button}>
            <Image style={styles.icon} width={10} height={30} source={DeleteIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate(screens.TASK_CONTROL, {index})} style={styles.button}>
            <Image style={styles.icon} width={10} height={30} source={EditIcon} />
        </TouchableOpacity>
    </View>

  )
}

export default EditIcons

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        marginLeft: 10
    },
    button: {

    },
    icon: {
        width: 30,
        height: 30
    }
})