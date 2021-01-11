import React from 'react';
import {Link} from 'react-router-dom';
import { Component } from 'react';
import ReactSession from '../ReactSession/ReactSession';
class RegisterForm extends Component{
 
       state ={
            member:[],
            username: '', 
            password: '',
            f_name:'',
            l_name:'',
            b_day:'',
            address:'',
            telephone:'',
            emp_id:'',
            sex:'',
            r_password:'',
         
        }
    
    //check event changing => show on console
    onFormChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
    }
    //submit login event
    onFormSubmit = (e) =>{
        e.preventDefault();
        if(this.state.password === ''||this.state.r_password === ''||
            this.state.username === '' ||this.state.f_name === ''||
            this.state.telephone === '' || this.state.l_name === ''){
            alert("กรอกข้อมูลไม่ครบ");
            
        }else if(this.state.password!=this.state.r_password){
                alert("รหัสผ่านไม่ตรงกัน");
        }else {
           fetch('http://localhost:3001/api/checkerMember/'+this.state.username)
            .then((response) => response.json())
            .then(List => {
                //console.log(List);
                if(List.length > 0){
                    alert(this.state.username +"มีผู้ใช้บัญชีนี้แล้ว ");
                }else {
                    fetch('http://localhost:3001/api/checkerId/'+this.state.emp_id)
                    .then((response) => response.json())
                    .then(List1 => {
                        
                    console.log(List);
                    if(List1.length > 0){
                        alert("คุณมีผู้ใช้บัญชีแล้ว กรุณาติดต่อ admin ");
                    }else {
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
                                f_name: this.state.f_name,
                                l_name: this.state.l_name,
                                b_day:  this.state.b_day,
                                address: this.state.address,
                                telephone: this.state.telephone,
                                emp_id: this.state.emp_id,
                                sex: this.state.sex
                            })
            
                        
                            };
                            fetch('http://localhost:3001/api/register', requestOptions)
                                .then(response => response.json())
                                //console.log(this.state);
                            alert("สร้างผู้ใช้เรียบร้อย")
                            if(ReactSession.get("username") === 'System'|| ReactSession.get("username") === 'system'){
                                this.props.history.push('/config');    
                            }else{
                                this.props.history.push('/'); 
                            }
                            

                    }
                    });
          
                
                }//else
            });


        }
    }
   
         
            
               
       
        
     
    render(){
        return(
            <div className="row">
            <div className="col-sm-3 mt-5"></div>
            <div className="col-sm-6 mt-5 card">
                <div className="card-body header">สมัครสมาชิก
                <div className="card-body ml-3 mr-3 mt-5 mb-1">
                <form onSubmit={this.onFormSubmit}>
               
                    <div className="form-group">
                        <label htmlFor="username">รหัสประชาชน</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="emp_id" 
                            name="emp_id" 
                            onChange={this.onFormChange}
                            pattern="[0-9]{13}" title="กรอกเฉพาะตัวเลข 13 ตัว"
                            required
                            />     
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username *</label>
                        <input 
                            type="text" 
                            className="form-control"
                            id="username" 
                            name="username" 
                            onChange={this.onFormChange}
                            pattern="[A-Zz-a0-9]" title="กรอกเฉพาะกาษาอังกฤษและตัวเลข"
                            required
                            />    
                    </div> 

                    <div className="form-group">
                        <label htmlFor="password">Password *</label>
                        <input 
                            type="text" 
                            className="form-control"
                            id="password" name="password" 
                            onChange={this.onFormChange}
                            pattern=".{4,}" title="กรอกรหัสผ่านอย่างน้อย 4 ตัว"
                            required
                            />    
                    </div>

                    <div className="form-group">
                        <label htmlFor="r_password">Re-Password *</label>
                        <input 
                            type="password" 
                            className="form-control"
                            id="r_password" name="r_password" 
                            onChange={this.onFormChange}
                            pattern=".{4,}" title="กรอกรหัสผ่านอย่างน้อย 4 ตัว"
                            required
                            />     
                    </div>

                    <div className="form-group">
                        <label htmlFor="f_name">ชื่อ *</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="f_name" name="f_name" 
                            onChange={this.onFormChange}
                            pattern="^[ก-๏\s]+$" title="กรุณากรอกเฉพาะไทย"
                            required
                            />     
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="l_name">นามสกุล *</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="l_name" name="l_name" 
                            onChange={this.onFormChange}
                            pattern="^[ก-๏\s]+$" title="กรุณากรอกเฉพาะไทย"
                            required
                            />     
                    </div>
                    <div className="form-group">
                        <label htmlFor="l_name">เพศ </label>
                        <select name="sex" id="sex" onChange={this.onFormChange} className="form-control" >
                            <option value="ชาย" >เพศ</option>
                            <option value="ชาย" >ชาย</option>
                            <option value="หญิง">หญิง</option>
                        </select>
                       
                    </div>

                    <div className="form-group">
                        <label htmlFor="b_day">วันเกิด </label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="b_day" name="b_day" 
                            onChange={this.onFormChange}
                            />     
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="laddress">ที่อยู่ </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="address" name="address" 
                            onChange={this.onFormChange}
                            />     
                    </div>

                    
                    <div className="form-group">
                        <label htmlFor="l_name">เบอร์โทรศัพท์ *</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="telephone" name="telephone" 
                            onChange={this.onFormChange}
                            pattern="[0-9]{10}" title="กรุณากรอกเฉพาะตัวเลข"
                            required
                            />     
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary my-1">สมัครสมาชิก</button>
                    </div>
                    <div className="text-center">
                    <Link to={'/'}>
                        <button  className="btn btn-outline-danger ">ยกเลิก</button>
                        </Link>
                        
                    </div>
                    <div className="col-md-6">
                        <div className="row"></div>
                    </div>

                </form>
                </div>
            </div>
            </div>
            <div className="col-sm-3 mt-5"></div>
        </div>
        );

}
}
export default RegisterForm;
