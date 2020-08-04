let _id = 0;

export  function addTodo(text) {
    return {
        type:"ADD_TODO",
        id:_id++,
        text
    }
}

export  function updateTodo(id) {
    return {
        type:"UPDATE_TODO",
        id
    }
}


