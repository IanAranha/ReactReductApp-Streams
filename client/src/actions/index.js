import { SIGN_IN, SIGN_OUT } from './types';


//User Id from the Google API object is passed to the action creater and added to the Store 
//as payload
export const signIn = (userId) => {
    return{
        type: SIGN_IN,
        payload: userId
    };
};


export const signOut = () => {
    return{
        type: SIGN_OUT,
    }
}