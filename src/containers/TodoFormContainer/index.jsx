import TodoForm from "../../components/TodoForm";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

const mapDispatchToProps = (dispacth) => ({
    addTodo: (content) => dispacth(addTodo(content))
});

const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);

export default TodoFormContainer;