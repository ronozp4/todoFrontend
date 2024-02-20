import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import EditIcon from '../assets/icons/edit-64.png'
import DeleteIcon from '../assets/icons/delete-100.png'
import { screens } from '../utils/constants';
import { useNavigation } from '@react-navigation/native';

const EditIcons = () => {
    const nav = useNavigation()

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => nav.navigate(screens.TASK_CONTROL)} style={styles.button}>
            <Image style={styles.icon} width={10} height={30} source={DeleteIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate(screens.TASK_CONTROL)} style={styles.button}>
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