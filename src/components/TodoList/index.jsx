import {Component} from "react";
import React from "react";
import Todo from "../Todo";


class TodoList extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.todos.map((todo, index) => {
                    <Todo key={index} todo={todo} >
                    </Todo>
                })}
            </React.Fragment>
        )
    }

}

export default TodoList