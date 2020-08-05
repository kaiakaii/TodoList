import React from "react";
import Todo from "../Todo";

class CompletedTodoList extends React.Component{

    render() {
        console.log("---------------",this.props.completedTodo)
        return(

            <div>
                {this.props.completedTodo.map((todo) =>
                    <Todo
                    updateTodo={this.props.updateTodo}
                    deleteTodo={this.props.deleteTodo}
                    key={todo.id} todo={todo} />
                )}
                </div>
        )
    }

}

export default CompletedTodoList