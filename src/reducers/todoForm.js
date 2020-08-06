
const todoForm = (state = [], action) => {
    switch (action.type) {
        case 'TODO_FROM':
            return action.value;
        default:
            return state;
    }
};
export default todoForm;