import { combineReducers } from "redux";
import todoForm from './todoForm'
import todoList from './todoList'

export default combineReducers({todoForm, todoList})