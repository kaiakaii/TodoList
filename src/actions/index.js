let _id = 0;

export  function addTodo(content) {
    return {
        type:"ADD_TODO",
        id:_id++,
        content
    }
}

export  function updateTodo(id) {
    return {
        type:"UPDATE_TODO",
        id
    }
}

export  function deleteTodo(id) {
    return {
        type:"DELETE_TODO",
        id
    }
}

export  function getCompletedTodo() {
    return {
        type:"COMPLETED_TODO"
    }
}
