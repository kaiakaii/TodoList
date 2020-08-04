import React from "react";
import './../../App.css';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.todo.text
        }
    }
    render() {
        console.log(this.state.text)
        return (
            <div className="todo_item">
                <li onClick={this.hasDoneToDo}>{this.state.text}</li>
                <button onClick={this.deleteToDo} className="todo_delete">x</button>
            </div>

        )
    }



    hasDoneToDo = event => {
        if (event.target.style.textDecoration === "line-through") {
            event.target.style.textDecoration = "none";
        } else {
            event.target.style.textDecoration = "line-through"
        }
        this.props.updateTodo(this.props.todo.id)
    };

    deleteToDo = event => {
        this.props.deleteTodo(this.props.todo.id)

    }
}

export default Todo;