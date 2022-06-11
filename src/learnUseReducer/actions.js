import { SET_NEW_JOB, ADD_JOB, REMOVE_JOB } from './constants.js';

export const setNewJob = (payload) => {
    return {
        type: SET_NEW_JOB,
        payload,
    };
};

export const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload,
    };
};

export const removeJob = (payload) => {
    return {
        type: REMOVE_JOB,
        payload,
    };
};