import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import plannerReducer from './plannerReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    planner: plannerReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer