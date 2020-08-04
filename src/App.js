import React from 'react';
import './App.css';
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";
import {HashRouter as Router, Route,Link} from "react-router-dom";
import CompletedTodoList from "./components/CompletedTodoList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <Router>
                        <Link to="/completedTodoList">CompletedTodoList</Link>
                        <Route path="/completedTodoList" component={CompletedTodoList}></Route>
                        <br/>
                        <Link to="/todoList">TodoList</Link>
                        <Route path="/todoList" component={TodoListContainer}></Route>
                    </Router>

                    <TodoListContainer/>
                    <TodoFormContainer/>
                </div>
            </header>
        </div>
    );
}

export default App;
