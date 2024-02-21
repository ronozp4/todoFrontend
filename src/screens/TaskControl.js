import React, { useEffect, useCallback, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { postTask, updateTask } from '../api/apiService';
import store from '../stores/mobxStore';
import BackButton from '../components/BackButton';
import taskIcon from '../assets/icons/task.png'


const TaskControl = ({ route }) => {

    const { reset, handleSubmit, control, formState: { errors }, } = useForm()
    const nav = useNavigation();
    const [isEdit, setIsEdit] = useState(false)
    const [isBtnDisabled, setBtnDisabledt] = useState(false) // disable button spam

    useEffect(() => {
        if (route?.params) {
            setIsEdit(true)
            reset({
                title: store.todolist[route?.params.index].title,
                description: store.todolist[route?.params.index].description
            })
        }
    }, [reset])

    const onSubmit = useCallback( async(formData) => {
        setBtnDisabledt(true)
        const compliteTask = { ...formData, ...{ done: false } }

        if (route?.params) {
            updateTask(formData,store.todolist[route?.params.index]._id )
            store.updateTaskById(route?.params.index, compliteTask)
        } else {
            const res = await postTask(compliteTask)
            store.addTask({...compliteTask, ...{_id: res.insertedId}})
        }
        nav.navigate('Home')
    }, []);

    return (
        <>
            <BackButton />
            <View style={styles.container}>
                <Image source={taskIcon} />
                <Text style={styles.title}>{isEdit ? 'Edit' : 'Add New'} Task!</Text>
                <Controller
                    control={control}
                    rules={{ required: true, }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder="Task Title"
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="title"
                />
                <Text style={styles.error}>{errors.title?.type}</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            onChangeText={onChange}
                            value={value}
                            multiline
                        />
                    )}
                    name="description"
                />
                <View style={styles.submitButton}>
                    <Button disabled={isBtnDisabled} title={isEdit ? ' Edit ' : 'Add New'} onPress={handleSubmit(onSubmit)} />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: '20%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: '80%',
    },
    submitButton: {
        marginTop: 20,
    },
    successText: {
        color: 'green',
        marginTop: 10,
        fontSize: 17,
    },
    error: {
        alignSelf: 'flex-start',
        color: 'red',
        marginLeft: '10%'
    }
});

export default TaskControl;