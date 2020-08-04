import React from "react";
import './../../App.css';

class Todo extends React.Component {



    render() {
        console.log(this.state.text)
        return (
            <div className="todo_item" onClick={this.hasDoneToDo}>
                <li>{this.state.text}</li>
                <span onClick={this.deleteToDo}>x</span>
            </div>

        )
    }

    constructor(props) {
        super(props)
        this.state = {
            text: this.props.todo
        }
    }

    hasDoneToDo() {

    }

    deleteToDo() {

    }
}

export default Todo;