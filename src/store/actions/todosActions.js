export const createTodo = (todo) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        firestore.collection('todos').add({
            ...todo,
            authorId: authorId,
        }).then(() => {
            dispatch({ type: 'CREATE_TODO', todo });
        }).catch((err) => {
            dispatch({ type: 'CREATE_TODO_ERROR', err });
        })        
    }
};

export const deleteTodo = (id) => {
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('todos').doc(id).delete();     
    }
};

export const updateTodo = (updatedTodo, id) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore()
        //const authorId = getState().firebase.auth.uid;
		firestore.collection('todos').doc(id).update({
            ...updatedTodo
            //authorId: authorId,
		});
	}
}

export const getATodo = (todoID) => {
	return (dispatch, getState, { getFirestore }) => {

		const firestore = getFirestore()
		firestore.collection('todos').doc(todoID).get().then((doc) => {
			if (doc.exists) {
				const data = doc.data()
				dispatch({ type: 'GET_TODO', data })	
			} else {
				console.log('does not exist')
			}		
		})
	}
}