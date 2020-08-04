import React from "react";
import Todo from "../Todo";


class TodoList extends React.Component {

    render() {
        console.log(this.props.todoList);
        return (

            <React.Fragment>
                <div>
                {this.props.todoList.map((todo, index) => <Todo key={index} todo={todo} />
                )}
                </div>
            </React.Fragment>

        )
    }

}

export default TodoList