import axios from 'axios'
const basicUrl = "https://5e9ec500fb467500166c4658.mockapi.io/todos";

const getTodos = () => axios.get(basicUrl).then(response => response.data)
const addTodo = () =>{
    axios.post(basicUrl)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
const updateTodo = () =>{
    axios.get(basicUrl)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export {getTodos,addTodo,updateTodo}