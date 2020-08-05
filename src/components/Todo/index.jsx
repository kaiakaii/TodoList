import React from "react";
import './../../App.css';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.todo.content
        }
    }
    render() {
        console.log(this.state.content)
        return (
            <div className="todo_item">
                <li style={{textDecoration:this.props.todo.status?"line-through":"none"}} onClick={this.hasDoneToDo}>{this.state.content}</li>
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