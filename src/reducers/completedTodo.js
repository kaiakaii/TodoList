const completedTodo = (state = [], action) => {
    switch (action.type) {
        case 'COMPLETED_TODO':
            return state.filter(todo => todo.completed === true);
        default:
            return state;
    }
};

export default completedTodo