import {connect} from "react-redux";
import TodoList from "../../components/TodoList";
import {deleteTodo, updateTodo} from "../../actions";

const mapStateToProps = (state) => ({
    todoList: state.todoList
});
const mapDispatchToProps = (dispacth) => ({
    updateTodo:(id) => dispacth(updateTodo(id)),
    deleteTodo:(id) => dispacth(deleteTodo(id))
});
const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default TodoListContainer;