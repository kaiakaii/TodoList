const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, ...action.content]
        case 'UPDATE_TODO':
            return state.map(todo => todo.id === action.id ? {...todo, status: !todo.status} : todo);
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
};
export default todoList;