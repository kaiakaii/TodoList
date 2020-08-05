import React from 'react';
import {postTodo} from '../../API'
import { Input, Space} from 'antd';
import 'antd/dist/antd.css'
class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {content:''}
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <Space>
                <Input type="text" value={this.state.content} onChange={this.handleChange}/>
                <Input type="submit" value="Add"/>
                </Space>
            </form>
        )
    }

    handleChange = event =>{
        this.setState({
            content:event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault();
        let todo = {
            content: this.state.content
        }
        postTodo(todo).then(response=>{
            console.log(response)
                this.props.addTodo([response.data])
            }
            
        )
        
    }
}

export default TodoForm;