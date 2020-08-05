import React from 'react';
import {postTodo} from '../../API'
class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {content:''}
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.content} onChange={this.handleChange}/>
                <input type="submit" value="Add"/>
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