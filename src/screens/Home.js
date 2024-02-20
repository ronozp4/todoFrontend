import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TaskItem from '../components/TaskItem'
import { fetchData } from '../api/apiService'
import MovableButton from '../components/AddButton'
import AddTaskButton from '../components/AddTaskButton'

const Home = () => {
    const [todoList, setTodoList] = useState([])

    useEffect(()=>{
        const getData = async ()=> {
            const data = await fetchData()
            setTodoList(data)
        }
        getData()
    },[])
  return (
    <View style={{flex: 1, paddingBottom: 20}}>
      <Text style={styles.title}>ToDo List!</Text>
      <FlatList
      contentContainerStyle={{paddingBottom: 70}}
        data={todoList}
        renderItem={({item}) => <TaskItem task={item} />}
        keyExtractor={(item) => item.id}
      />
      {/* <MovableButton /> */}
      <AddTaskButton />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        color: '#2AAA8A',
        fontWeight: '800',
        textAlign: 'center',
        margin: 20
    }
})