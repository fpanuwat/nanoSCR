import React from 'react';
import { Component } from 'react';
import Header from './header';
import {Link} from 'react-router-dom';
class editDtail extends Component{
    state={
        username: '',
        password: '',
        emp_id: '',
        emp_name: '',
        emp_lname: '',
        telephone: '',
        birthday: '',
        sex:  '',
        address: '',
        author: ''  
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        fetch('http://localhost:3001/api/checkerId/'+id)
        .then((response) => response.json())
        .then(List => {
            this.setState({ 
                username: List[0].username,
                password: List[0].password,
                emp_id: List[0].emp_id,
                emp_name: List[0].emp_name,
                emp_lname: List[0].emp_lname,
                telephone: List[0].telephone,
                birthday: List[0].birthday,
                sex: List[0].sex,
                address: List[0].address,
                author: List[0].author
            });
        });
         
    }
    updateMember =()=>{
        
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
                'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({ 
                author: this.state.author,
                password: this.state.password,
                emp_name: this.state.emp_name,
                emp_lname: this.state.emp_lname,
                telephone: this.state.telephone,
                birthday: this.state.birthday,
                sex: this.state.sex,
                address: this.state.address,
            })
    
        
        };
            fetch('http://localhost:3001/api/updateMember/'+this.state.emp_id, requestOptions)
                .then(response => response.json())
        this.props.history.push('/config'); 

    }
    onChangeValue = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
    }
    render(){
    
        return(
            <div className="container">
                <Header/> 
                <div className="row">
                <div className="container">
                    <Link to="/config"><button className="btn btn-primary">back</button></Link>
                    <button className="btn btn-warning" onClick={e =>
                            window.confirm("ต้องการแก้ไขข้อมูลหรือไม่?") && this.updateMember(e)
                        }>แก้ไข</button>
                    
                </div>
                <div className="col-sm-3 mt-5"></div>
               
                
                <div className="col-sm-6 mt-5 card">
                <div className="card-body header"> แก้ไขข้อมูล
               
                <div className="card-body ml-3 mr-3 mt-5 mb-1">
                <form>
                        <select name="author" 
                        value ={this.state.author} 
                        onChange={this.onChangeValue}>
                            <option value="8">ไม่มีสิทธิ์</option>
                            <option value="0">system</option>
                            <option value="1">พนักงานส่วนหน้า</option>
                            <option value="2">ถอด/เคาะ</option>
                            <option value="3">โป้วสี/เตรียมพื้น</option>
                            <option value="4">พ่นสีจริง</option>
                            <option value="5">ประกอบ</option>
                            <option value="6">ขัดสีล้าง</option>
                            <option value="7">ประดับยนต์</option>
                        </select>
                        <div className="form-group">
                        รหัสประชาชน
                        <input type="text"
                                name="emp_id"
                                className="form-control" 
                                onChange={this.onChangeValue} 
                                value={this.state.emp_id} 
                                disabled/> 
                        </div>
                        <div className="form-group">
                        Username: 
                        <input type="text" 
                                name="username"
                                className="form-control" 
                                onChange={this.onChangeValue} 
                                value={this.state.username} 
                                disabled/> 
                        </div>
                        <div className="form-group">
                            Password:
                            <input type="text" 
                                name="password"
                                className="form-control" 
                                onChange={this.onChangeValue} 
                                value={this.state.password} />
                        </div>
                        <div className="form-group">
                            Re-password
                            <input type="text" 
                                name="r_password"
                                className="form-control" 
                                onChange={this.onChangeValue}  />
                        </div>
                        <div className="form-group"> 
                            ชื่อ
                            <input type="text" 
                                name="emp_name"
                                className="form-control" 
                                pattern="^[ก-๏\s]+$" title="กรุณากรอกเฉพาะไทย"
                                onChange={this.onChangeValue} 
                                value={this.state.emp_name}  />
                        </div>
                        <div className="form-group">
                            สกุล
                        <input type="text" 
                                name="emp_lname"
                                className="form-control" 
                                pattern="^[ก-๏\s]+$" title="กรุณากรอกเฉพาะไทย"
                                onChange={this.onChangeValue} 
                                value={this.state.emp_lname} /> 
                        </div>
                        <div className="form-group"> 
                            <label>เบอร์โทรศัพท์</label> 
                            <input type="text" 
                                name="telephone"
                                className="form-control" 
                                onChange={this.onChangeValue} 
                                value= {this.state.telephone} /> 
                        </div>
                        <div className="form-group">
                        วันเกิด
                        <input type="date" 
                                name="birthday"
                                className="form-control" 
                                onChange={this.onChangeValue} 
                                value={this.state.birthday} /> 
                        </div>
                        <div className="form-group">
                        เพศ
                        <input type="text" 
                                name="sex"
                                className="form-control" 
                                onChange={this.onChangeValue} 
                                value={this.state.sex} />
                        </div>
                        <div className="form-group">
                        ที่อยู่ 
                        <input type="text" 
                                name="address"
                                className="form-control" 
                                onChange={this.onChangeValue} 
                                value={this.state.address} /> 
                        </div>
                
         

                </form>
                </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default editDtail;