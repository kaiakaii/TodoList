import {Component} from "react";

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            text:this.props.text
        }
    }
    render() {
        return(
            <p>{this.state.text}</p>
        )
    }

}

export default Todo;