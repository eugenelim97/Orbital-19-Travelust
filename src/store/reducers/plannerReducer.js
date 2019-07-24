const initState = {
    todos: []
}

const plannerReducer = (state = initState, action) => {
    const { data } = action
    
    switch (action.type) {
        case 'CREATE_TODO':
            console.log('created todo', action.todo);
            return state;
        case 'CREATE_TODO_ERROR':
            console.log('created todo error', action.err);
            return state;
        case 'GET_TODO':
            return {
                ...state, 
                data
            }
        default: 
            return state;
    }
}

export default plannerReducer