import { SET_NEW_JOB, ADD_JOB, REMOVE_JOB } from './constants.js';

export const initialState = {
    newJob: '',
    jobs: [],
};

const reducer = (state, action) => {
    console.log('state:', state, 'action', action);
    switch (action.type) {
        case SET_NEW_JOB:
            return { ...state, newJob: action.payload };
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
        case REMOVE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);
            return {
                ...state,
                jobs: newJobs,
            };
        default:
            throw new Error('Invalid action' + action.type);
    }
};

export default reducer;
