import { connect } from "react-redux";
import TodoList from "../../components/TodoList";
import { deleteTodo, updateTodo, addTodo,getAllTodo } from "../../actions";

const mapStateToProps = (state) => ({
    todoList: state.todoList
});
const mapDispatchToProps = (dispacth) => ({
    updateTodo: (id) => dispacth(updateTodo(id)),
    deleteTodo: (id) => dispacth(deleteTodo(id)),
    addTodo: (content) => dispacth(addTodo(content)),
    getAllTodo:(content) => dispacth(getAllTodo(content))
});
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;