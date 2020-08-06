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
        let updateId = this.props.todo.id
        console.log("sssssssssssss",this.props.todo)
        let todo = {
            id: this.props.todo.id,
            content:this.props.todo.content,
            status:!this.props.todo.status
        }
        putTodo(updateId,todo).then(response =>{
            console.log(response.data)
            this.props.updateTodo(updateId)
        })
       
    };

    deleteToDo = event => {

        delTodo(this.props.todo.id).then(() =>{this.props.deleteTodo(this.props.todo.id)})
        

    }
}

export default Todo;