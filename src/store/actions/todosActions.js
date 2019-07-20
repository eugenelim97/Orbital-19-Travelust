export const createTodo = (todo) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        firestore.collection('todos').add({
            ...todo,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_TODO', todo });
        }).catch((err) => {
            dispatch({ type: 'CREATE_TODO_ERROR', err });
        })        
    }
};