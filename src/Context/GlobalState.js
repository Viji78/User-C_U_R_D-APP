import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer';

//initialStte State
const initialStte = {
    users: []
};


//create context 
export const GlobalContext = createContext(initialStte);

//provider component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialStte);


    //Actions
const removeUser=(id)=>{
    dispatch({
        type:'Remove_User',
        payload:id
    })
}

    //Actions 2
    const addUser=(user)=>{
        dispatch({
            type:'Add_User',
            payload:user
        })
    }

    //edittor
    const editUser =(user)=>{
        dispatch({
            type:'Edit_User',
            payload:user
        })
    }


    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
 
    )

}