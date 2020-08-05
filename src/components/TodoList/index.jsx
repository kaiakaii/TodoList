import React from "react";
import Todo from "../Todo";
import {getTodos} from '../../API'

class TodoList extends React.Component {


    componentWillMount(){
        getTodos().then(data =>{
           console.log(data)
           this.props.addTodo(data);
        })
    }

    render() {
        console.log(this.props.todoList);
        return (

            <React.Fragment>
                <div>
                {this.props.todoList.map((todo) =>
                    <Todo
                    updateTodo={this.props.updateTodo}
                    deleteTodo={this.props.deleteTodo}
                    key={todo.id} todo={todo} />
                )}
                </div>
            </React.Fragment>

        )
    }

}

export default TodoList