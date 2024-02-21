import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskItem from '../components/TaskItem'
import { getTodolist } from '../api/apiService'
import AddTaskButton from '../components/AddTaskButton'
import store from '../stores/mobxStore'
import { observer } from 'mobx-react-lite'
import { useEffectUpdate } from '../customHooks/useEffectUpdate'

const Home = () => {

    useEffectUpdate(()=>{
        const getData = async ()=> {
            const data = await getTodolist() 
            store.setTodoList(data)
        }
        getData()
    },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List!</Text>
      <FlatList 
        contentContainerStyle={styles.flatList}
        data={store.todolist} 
        renderItem={({index}) => <TaskItem key={index} index={index} />}
        keyExtractor={(item) => item._id} 
      />
      <AddTaskButton />
    </View>
  )
}

export default observer(Home) 

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      paddingBottom: 20
    },
    flatList: {
      paddingBottom: 70
    },
    title: {
        fontSize: 40,
        color: '#2AAA8A',
        fontWeight: '800',
        textAlign: 'center',
        margin: 20
    }
})