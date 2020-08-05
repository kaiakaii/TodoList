import {connect} from "react-redux";
import TodoList from "../../components/TodoList";
import {deleteTodo, updateTodo,addTodo} from "../../actions";

const mapStateToProps = (state) => ({
    todoList: state.todoList
});
const mapDispatchToProps = (dispacth) => ({
    updateTodo:(id) => dispacth(updateTodo(id)),
    deleteTodo:(id) => dispacth(deleteTodo(id)),
    addTodo: (text) => dispacth(addTodo(text))
});
const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default TodoListContainer;