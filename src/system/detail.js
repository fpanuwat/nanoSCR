
import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';

class detail extends Component{
    state={
        dpt_id:'',
        dpt_name: ''
    }
    //load department
    componentDidMount(){
      
        var id = this.props.data.author;
        fetch('http://localhost:3001/api/loadDpt/'+id)
        .then((response) => response.json())
        .then(List =>
            this.setState({ 
                dpt_id: List[0].dpt_id,
                dpt_name: List[0].dpt_name,
            })
        )
        
    }
    
    // delete member
    onDel =(e)=>{
        const id = this.props.data.emp_id;
        fetch('http://localhost:3001/api/deleteMember/'+id ,{
            method: 'DELETE'
        }).then(res => res.text())
        .then(res => console.log(res));  
        alert("ทำการลบผู้ใช้: "+this.props.data.username+"เรียบร้อยแล้ว");
         window.location.reload();
    }
    
    render(){
        
        return(
            

                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            username : {this.props.data.username}
                            
                        
                        </div>
                        <div className="card-body">
                            <p>
                            <p>รหัสประชาชน : {this.props.data.emp_id}</p>
                            </p>
                            <p> ชื่อ-สกุล : {this.props.data.emp_name} {this.props.data.emp_lname}</p>
                            <p>เบอร์โทรศัพท์ : {this.props.data.telephone}</p>
                            <p>ระดับสิทธิ์ : {this.state.dpt_name}</p>
                            
                            <ul className="nav">
                                <li className = "nav-item">
                                    <button className="btn btn-outline-danger" onClick={ e =>
                                    window.confirm("ต้องการลบงานนี้หรือไม่?") && this.onDel(e) }>ลบ</button>
                                    </li>
                                <li className = "nav-item">
                                    <Link to={'/editDtail/'+this.props.data.emp_id}>
                                        <button className="btn btn-outline-warning">แก้ไข</button>
                                    </Link></li>
                                <li className = "nav-item">
                                    <Link to={'/memberInfo/'+this.props.data.emp_id}> 
                                    <button className="btn btn-info" >ดูข้อมูล</button>
                                    </Link></li>
                            </ul>
                            
                          
                           
                           
                                 
                        </div>
                    </div> 
                </div>
        )
    }


}
export default detail;