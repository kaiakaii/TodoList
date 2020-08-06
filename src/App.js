import React from 'react';
import './App.css';
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import CompletedTodoLContainer from "./containers/CompletedTodo";
import { Row, Col } from 'antd';
function App() {
    return (
        <Router>
            <Row>
                <Col className="todo_header" span={24}><center>What I want to accomplish today</center></Col>
            </Row>
            <Row className="todo_body">
                <Col className="todo-tag" span={8}>
                    <p><Link to="/completedTodoList">CompletedTodoList</Link></p>

                    <p><Link to="/">TodoList</Link></p>
                </Col>
                <Col className="todo_body_left" span={16}><Route exact path="/completedTodoList" component={CompletedTodoLContainer}></Route>
                    <Route exact path="/" component={TodoListContainer}></Route>

                </Col>
            </Row>
            <Row className="todo_foot">
                <Col span={24}><TodoFormContainer /></Col>
            </Row>
            {/* <div className="App">
                <header className="App-header">
                    <div>

                        <p></p>
                        <p></p>

                    </div>
                </header>
            </div> */}
        </Router>
    );
}

export default App;
