const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, ...action.text]
        case 'UPDATE_TODO':
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo);
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
};
export default todoList;