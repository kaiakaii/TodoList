import { combineReducers } from "redux";
import todoForm from './todoForm'
import todoList from './todoList'
import completedTodo from "./completedTodo";

export default combineReducers({ todoForm, todoList, completedTodo })