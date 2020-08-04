import {connect} from "react-redux";
import CompletedTodoList from "../../components/CompletedTodoList";
import {getCompletedTodo} from "../../actions";

const mapStateToProps = (state) => ({
    completedTodo: state.completedTodo
});
const mapDispatchToProps = (dispacth) => ({
    getCompletedTodo: () => dispacth(getCompletedTodo())
});
const CompletedTodoLContainer = connect(mapStateToProps, mapDispatchToProps)(CompletedTodoList);

export default CompletedTodoLContainer;