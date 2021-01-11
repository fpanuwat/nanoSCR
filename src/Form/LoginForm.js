import React, { Component } from 'react';
//import ReactSession from 'react-client-session';

import ReactSession from '../ReactSession/ReactSession';
import { Link } from 'react-router-dom';
class LoginForm extends Component{
    
        state ={
            member:[],
            userId: '',
            username: '',
            password: '',
            auth: ''
        }
   
    //check event changing => show on console
    onOutPutChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
    }
    //submit login event
    onLoginSubmit = (e) =>{
        e.preventDefault();
       const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
                'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({ 
                username: this.state.username,
                password: this.state.password,
               
            })
    
         
        };
        fetch('http://localhost:3001/api/login',requestOptions)
        .then((response) => response.json())
        .then(List => {
            
                this.props.history.push('/');
            console.log(List);
            this.setState({ member: List });
        if(List === null ||this.state.member[0] === undefined){
                alert("worng username or password!");

            }else if(this.state.member[0].username === this.state.username && this.state.member[0].password === this.state.password){
            const auth = this.state.member[0].author;
            //ReactSession.set("username", this.state.username);
            ReactSession.setStoreType("sessionstorage");
            if(auth === '1'){
                ReactSession.set("front", this.state.username);
                this.props.history.push('/loadJob');
            }else if(auth === '2'||auth === '3'||auth === '4'||auth === '5'||auth === '6'||auth === '7'){
                ReactSession.set("engineer", this.state.username);
                this.props.history.push('/loadTask');
            }else if(auth === '0'){
                ReactSession.set("username", this.state.username);
                this.props.history.push('/config');
            }else{
                alert("คุณยังไม่มีสิทธิ์ในการเข้าถึงระบบ !!");
                this.props.history.push('/');
            }
        }else {
            alert("worng username or password!");
            this.props.history.push('/');
        }
        });
      }//end onLoginSubmit
   
    
    render(){
        
        return(
            <div>
                <div className="jumbotron text-center" >
                        <h1>SC Garage</h1>
                        
                </div>
                <div className="col-6 mt-5 mx-auto card">
                    
                    <div className="card-body">
                        <form onSubmit={this.onLoginSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" id="username" name="username" required
                                    onChange={this.onOutPutChange}
                                    />     
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password </label>
                                <input type="password" className="form-control" id="password" name="password" required
                                    onChange={this.onOutPutChange}
                                    />     
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary my-1">Login</button>
                            </div>
                            
                            <Link to="/login" className="btn btn-link">Login</Link>
                            <Link to="/register" className="btn btn-link">Register</Link>
                            <Link to="/test" className="btn btn-link"></Link>
                        </form>
                    </div>
                
                </div>
            </div>
        );

    }
}


export default LoginForm;