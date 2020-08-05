import React from "react";
import './../../App.css';
import {putTodo,delTodo} from '../../API'
import { Timeline,Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
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
            <div >
                {/* className="todo_item" */}
                {/* <li style={{textDecoration:this.props.todo.status?"line-through":"none"}} onClick={this.hasDoneToDo}>{this.state.content}</li> */}
                <Timeline> 
                    <Space><Timeline.Item style={{textDecoration:this.props.todo.status?"line-through":"none"}} onClick={this.hasDoneToDo}>{this.state.content}<CloseOutlined onClick={this.deleteToDo} /></Timeline.Item></Space>
                    
                </Timeline>
                {/* <button onClick={this.deleteToDo} className="todo_delete">x</button> */}
            </div>

        )
    }



    hasDoneToDo = event => {
        if (event.target.style.textDecoration === "line-through") {
            event.target.style.textDecoration = "none";
        } else {
            event.target.style.textDecoration = "line-through"
        }
        let updateId = this.props.todo.id
        putTodo(updateId).then(response =>{
            this.props.updateTodo(updateId)
        })
       
    };

    deleteToDo = event => {

        delTodo(this.props.todo.id).then(() =>{this.props.deleteTodo(this.props.todo.id)})
        

    }
}

export default Todo;