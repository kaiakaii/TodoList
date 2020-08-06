import axios from 'axios'
const basicUrl = "http://localhost:8080/";

const getTodos = () => axios.get(basicUrl+"todos").then(response => response.data)

const postTodo = (todo) => axios.post(basicUrl+"todos",todo)

const putTodo = (id,todo) => {
    console.log(todo) 
    return axios.put(basicUrl+"todos/"+id, todo)
}

const delTodo = (id) => axios.delete(basicUrl+"todos/"+id)

export {getTodos,postTodo,putTodo,delTodo}