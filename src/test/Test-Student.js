import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddStudent extends Component{
    state = {
        name: '',score:''
    }
    onChangeData = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmitStudentForm =(data,e) =>{
        e.preventDefault();
        const newData ={
            id: new Date().getTime().toString(),
            name: data.name,
            score: data.score,
            date1: data.r_date,
            date2: data.l_date
        }
        this.props.addStudentAtScore(newData);
        this.props.history.push('/');

    }
    render(){
        return(
            <div className="row mt-3 mb-5 ml-5 mr-5">
                 <h3>ใบรับรถเข้าซ่อม/ใบแจ้งซ่อม</h3>
                <div className="card col-12 col-sm-18 col-lg-18 mx-auto"> 
                 <form onSubmit={this.onSubmitStudentForm.bind(this,this.state)}>
                    <div className="card-body">
                       
                        <div className="block-4 text-center">
                        <h4>ข้อมูลลูกค้า</h4>
                        </div>
                        <div className="form-group">
                            <label>ทะเบียนรถ</label>
                            <input 
                                type="text"
                                name="name"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>จังหวัด</label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>ประเภทรถ </label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>ยี่ห้อรถ </label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>รุ่น </label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>แบบรถ </label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>หมายเลขตัวถัง/โมเดล </label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>หมายเลขเครื่อง </label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>หมายเลข กิโลเมตร</label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>สีรถ </label>
                            <select name="gear" 
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                                >
					            <option value="Manual">Manual</option>
					            <option value="Auto">Auto</option>
                            </select>
                            
                        </div>
                        <div className="form-group">
                            <label>สีที่พ่น </label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>รถประกัน/คู่กรณี</label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>ชื่อลูกค้า</label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>เบอร์โทรศัพท์</label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>ที่อยู่</label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>รายละเอียด/รายการซ่อม**</label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div> <div className="form-group">
                            <label>ระดับความเสียหาย</label>
                            <select name="damage" 
                                className="form-control"
                                value=""
                                onChange={this.onChangeData}
                                >
					            <option value="S">S</option>
					            <option value="M">M</option>
                                <option value="L">L</option>
					            <option value="XL">XL</option>
                                <option value="H1">H1</option>
					            <option value="H2">H2</option>
                                <option value="H3">H3</option>
					            <option value="H4">H4</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>อุปกรณ์เพิ่มเติม</label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        
                      
                    </div>  
                    <div className="card-body">
                       
                        <div className="block-4 text-center">
                        <h4>รายละเอียดรถ</h4>
                        </div>
                        <div className="form-group">
                            <label>Job No. </label>
                            <input 
                                type="text"
                                name="name"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>*วันที่เข้าซ่อม </label>
                            <input 
                                type="date"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>อุปกรณ์เพิ่มเติม</label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        
                      
                    </div> 
                    <div className="card-body">
                       
                        <div className="block-4 text-center">
                        <h4>รายละเอียดประกัน</h4>
                        </div>
                        <div className="form-group">
                            <label>Job No. </label>
                            <input 
                                type="text"
                                name="name"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>*วันที่เข้าซ่อม </label>
                            <input 
                                type="date"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>อุปกรณ์เพิ่มเติม</label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="block-4 text-center">
                        <h4>การรับส่งรถ</h4>
                        </div>
                        <div className="form-group">
                            <label>*วันที่เข้าซ่อม </label>
                            <input 
                                type="date"
                                name="r_date"
                                className="form-control"
                                value={this.state.r_date}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>*วันที่ส่งรถ </label>
                            <input 
                                type="date"
                                name="l_date"
                                className="form-control"
                                value={this.state.l_date}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>ผู้รับรายงาน </label>
                                <input 
                                    type="text"
                                    name="r_name"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.onChangeData}
                                />
                        </div>     
                        <div className="form-group">
                            <label>ผู้รับรถ </label>
                                <input 
                                    type="text"
                                    name="l_name"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.onChangeData}
                                />
                        </div>              
                    </div>  
                    <div className="form-group text-center pt-3">
                            <button className="btn btn-outline-danger btn-sm mr-1"
                            onClick={ ()=> this.props.history.push('/')}>Cancle</button>
                            <button className="btn btn-sm btn-primary ml-1 "
                                type="submit"
                            >Add</button>
                        </div>
                  </form>
                </div>  
            </div>
        )
    }
    
}
const mapDispatchToProps = dispatch => {
    return {
        addStudentAtScore : (newStudentData) => {
            return dispatch({ type : 'ADD_STUDENT', payload : newStudentData })
        }
    }       
}
export default connect(null, mapDispatchToProps)(AddStudent);
