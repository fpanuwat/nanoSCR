
import axios from 'axios';

export const getLists = () =>{
    return (dispatch) => {
        axios.get('http://localhost:3001/api/member/')
        .then ((res)=>{
            dispatch({
                type: 'GET_LIST', payload: res.data
            });
        });
    }
}

export const getStudent = (id) =>{
    return (dispatch) => {
        axios.get('https://localhost:3000/api/member/${id}')
        .then (()=>{
            dispatch({
                type: 'GET_STUDENT', payload: id
            });
        });
    }
}/*
export const delStudent =(id) =>{
    return (dispatch) =>{
        axios.delete('https://localhost:3000/api/students/${id}')
        .then((res) =>{
            dispatch({
                type: 'DELETE',payload: res.data.id
            });
        });
    }
}
export const addStudent =(data) =>{
    return (dispatch) =>{
        axios.post('https://localhost:3000/api/students/',data)
        .then((res) =>{
            dispatch({
                type: 'ADD_STUDENT',payload: res.data.id
            });
        });
    }
}
export const editStudent =(data) =>{
    return (dispatch) =>{
        axios.put('https://localhost:3000/api/students/${data.id}',data)
        .then((res) =>{
            dispatch({
                type: 'EDIT_STUDENT',payload: res.data.id
            });
        });
    }
}*/