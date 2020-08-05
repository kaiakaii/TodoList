import React from 'react';
import './App.css';
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";
import {HashRouter as Router, Route,Link} from "react-router-dom";
import CompletedTodoLContainer from "./containers/CompletedTodo";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <Router>
                        <Link to="/completedTodoList">CompletedTodoList</Link>
                        <br/>
                        <Link to="/">TodoList</Link>
                        <Route exact path="/completedTodoList" component={CompletedTodoLContainer}></Route>
                        <Route exact path="/" component={TodoListContainer}></Route>
                    </Router>
                    <TodoFormContainer/>
                </div>
            </header>
        </div>
    );
}

export default App;
