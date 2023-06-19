/**
 *
 * project name     : react-redux
 * project author   : mindula dilthushan
 * author email     : minduladilthushan1@gmail.com
 *
 *
 */
import {FETCH_USERS_CLICK, SELECT_USER} from "./types";

//action creator
export const fetchUsers = () => {
    return {
        type: FETCH_USERS_CLICK,
        payload: [
            {
                userId: 1,
                userName: 'Mindula',
                userEmail: 'mindula1@gmail.com',
                userDesc: 'Software Engineer'
            },
            {
                userId: 2,
                userName: 'Dilthushan',
                userEmail: 'dilthushan1@gmail.com',
                userDesc: 'Software Engineer'
            },
            {
                userId: 3,
                userName: 'Shashini',
                userEmail: 'shashini1@gmail.com',
                userDesc: 'Software Engineer'
            },
            {
                userId: 4,
                userName: 'Prabodha',
                userEmail: 'prabodha1@gmail.com',
                userDesc: 'Software Engineer'
            }
        ]
    }
}

export const selectUser = (user) => {
    return {
        type: SELECT_USER,
        payload: user
    }
};
