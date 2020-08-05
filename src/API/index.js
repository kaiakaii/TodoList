import axios from 'axios'
const basicUrl = "https://5e9ec500fb467500166c4658.mockapi.io/";

const getTodos = () => axios.get(basicUrl+"todos").then(response => response.data)
const postTodo = (todo) => axios.post(basicUrl+"todos",todo)
const putTodo = (id) => axios.put(basicUrl+"todos/"+id)
const delTodo = (id) => axios.delete(basicUrl+"todos/"+id)

export {getTodos,postTodo,putTodo,delTodo}