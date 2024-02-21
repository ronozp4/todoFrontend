import { makeAutoObservable } from 'mobx';

class mobxStore {
    todolist = []

    constructor() {
        makeAutoObservable(this);
    }

    setTodoList = (todolist) => {
        this.todolist = [...todolist]
    }

    addTask = (task) => {
        this.todolist = [...this.todolist, task]
    }

    deleteTask = (taskIndex) => {
        if(taskIndex > -1){
            this.todolist.splice(taskIndex, 1);
        }
        this.todolist = [...this.todolist]
    }

    updateTaskIndex = (taskIndex, data) => {
        this.todolist[taskIndex] = { ...this.todolist[taskIndex], ...data }
    }

}


const store = new mobxStore();
export default store;