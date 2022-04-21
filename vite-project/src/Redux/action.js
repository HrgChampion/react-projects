export const SET_USER = 'SET_USER';
export const DELETE_USER = 'DELETE_USER';
export const ADD_USER = 'ADD_USER';
export const GET_USER = 'GET_USER';
export const UPDATE_USER = 'UPDATE_USER';
import axios from 'axios';
export const setUser = (user) => ({type:SET_USER, payload:user});
export const deleteUser = () => ({type:DELETE_USER, payload:user});
export const addUser = (user) => ({type:ADD_USER, payload:user});
export const getUser = (user) => ({type:GET_USER, payload:user});
export const updateUser = (user) => ({type:UPDATE_USER, payload:user});

export const loadUsers = () => {
    return (dispatch) => {
        dispatch(setUser({loading:true}));
        axios.get('http://localhost:4000/user')
        .then(res => {
            
            dispatch(setUser({users:res.data,loading:false}));
        })
        .catch(err => {
            dispatch(setUser({error:err,loading:false}));
        }
        )
    }
}
export const removeUsers = (id) => {
    return (dispatch) => {
        dispatch(setUser({loading:true}));
        axios.delete(`http://localhost:4000/user/${id}`)
        .then(res => {
            
            dispatch(deleteUser());
        })
        .catch(err => {
            dispatch(setUser({error:err,loading:false}));
            dispatch(loadUsers());
        }
        )
    }
}
export const addUsers = (user) => {
    return (dispatch) => {
        dispatch(addUser({loading:true}));
        axios.post(`http://localhost:4000/user`,user)
        .then(res => {
            
            dispatch(addUser({user:res.data,loading:false}));
            dispatch(loadUsers());
        })
        .catch(err => {
            dispatch(addUser({error:err,loading:false}));
        }
        )
    }
}
export const getUserdata = (id) => {
    return (dispatch) => {
        dispatch(addUser({loading:true}));
        axios.get(`http://localhost:4000/user/${id}`)
        .then(res => {
            
            dispatch(getUser({user:res.data,loading:false}));
            // dispatch(loadUsers());
        })
        .catch(err => {
            dispatch(getUser({error:err,loading:false}));
        }
        )
    }
}
export const updatedUser = (user,id) => {
    return (dispatch) => {
        dispatch(updateUser({loading:true}));
        axios.put(`http://localhost:4000/user/${id}`,user)
        .then(res => {
            
            dispatch(updateUser());
            // dispatch(loadUsers());
        })
        .catch(err => {
            dispatch(updateUser({error:err,loading:false}));
        }
        )
    }
}