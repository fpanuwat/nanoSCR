
import React from 'react';
import { Component } from 'react';
import Memb from './detail';
import Header from './header';
import { Link } from 'react-router-dom';
import ReactSession from '../ReactSession/ReactSession';

class system extends Component{
    state={
        member:[]
         
    }
    componentDidMount(){
        //ReactSession.setStoreType("sessionstorage");
        //console.log("xxx"+ReactSession.get("username"));
        fetch('http://localhost:3001/api/member')
        .then((response) => response.json())
        .then(List =>{
           // console.log(List)
            this.setState({member: List})
            console.log(this.state.member.length)
        })
    }
    logout =()=>{
        ReactSession.remove("username");
        alert("ออกจากระบบแล้ว");
        console.log('remove session '+ ReactSession.remove("username") +'session');
    }
    render(){
        
            let list = this.state.member.map(items => (
                <div className="col-12 col-sm-6 col-lg-4 mt-3" key={items.id}>
                    <Memb data={items}/>
                </div>
            ));
        
        return(
            <div className="container-fluid">
                <Header/>
                <div class="container">
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                        <a class="nav-link" href="#"></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">{ReactSession.get("username")}</a>
                        </li>
                        <li class="nav-item">
                        <Link to="/register"><button className="btn btn-success">สร้างข้อมูลผู้ใช้</button></Link>
                        </li>
                        <li class="nav-item">
                         <Link to="/"><button className="btn btn-primary" onClick={this.logout}>Logout</button></Link>
                        </li>
                    </ul>
                    
                </div>
                <div className="row" >
                    {list}
                </div> 
                <div class="container p-3 my-3  text-white">
                <h1>My First Bootstrap Page</h1>
                <p>This container has a border and some extra padding and margins.</p>
                </div>
   
            </div>
        )
    }

}
export default system;