
import axios from 'axios';
/*
const initState = axios.create({
    baseURL: 'https://localhost:3000/api',
    header: {'X-Customer-Header':'footer'}
});*/

/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student"
});

export const getVal = () =>{ 
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM student", function (err, result, fields) {
            if (err) throw err;
            const reStudent = JSON.stringify(result);
            console.log(JSON.stringify(result));
            return reStudent;
        });
    });
}
*/

 /* initState.get("/user")
    .then(res =>{
        console.log("res:",res)
    }).catch(err =>{
        console.log(err)
    })   */
/*    
export const getStudentLists = () =>{
    return (dispatch) => {
        axios.get('http://localhost:3000/api/Student')
        .then ((res)=>{
            dispatch({
                type: 'GET_STUDENT_LIST', payload: res.data
            });
        });
    }
}*/
  /*  
export const getStudentLists = () =>{
    return new Promise((accept)=>{
        axios.get('http://localhost:3000/api/Student').then((res)=>{
            accept({ 
                type: 'GET_STUDENT_LIST',payload: res.data
            });
        });
    }); 
}
*/
export const getStudentLists = () =>{
    return(dispatch) => {
        fetch('http://localhost:3000/api/Students')
        .then ((res)=>{
            dispatch({
                type: 'GET_STUDENT_LIST', payload: res.students
            });
        });
    }
}
export const delStudent =(id) =>{
    return (dispatch) =>{
        axios.delete('https://localhost:3000/api/Student/${id}')
        .then((res) =>{
            dispatch({
                type: 'DELETE',payload: res.data.id
            });
        });
    }
}