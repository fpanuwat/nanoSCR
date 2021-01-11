import React, { Component } from 'react';
import {connect} from 'react-redux';
import HeaderJob from './Header-Job';

class CustomerFrom extends Component{
    state = {
        id: '',
        s_date: '',
        e_date: '',
        car_number: '',
        bran: '',
        serie: '',
        color: '',
        c_year: '',
        gear: '',
        model_number: '',
        insurance: '',
        c_name: '',
        address: '',
        e_mail: '',
        c_tel: '',
        d_detail: '',
        damage: '',
        acc_tools: '',
    }
    onChangeData = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    componentWillMount() {
        const userId =this.props.match.params.id;
        const e = this.getCurrentCustomer(userId);
        if(e){
            this.setState({
                id: e.id,
                s_date: e.s_date,
                e_date: e.e_date,
                car_number: e.car_number,
                bran: e.bran,
                serie: e.serie,
                color: e.color,
                c_year: e.c_year,
                gear: e.gear,
                model_number: e.model_number,
                insurance: e.insurance,
                c_name: e.c_name,
                address: e.address,
                e_mail: e.e_mail,
                c_tel: e.c_tel,
                d_detail: e.d_detail,
                damage: e.damage,
                acc_tools: e.acc_tools,
            })
          
        }else{
            this.props.history.push('/');
            
        } 
    }
    getCurrentCustomer(id){
        const allStudent = this.props.studentsFromStore;
        const [student] =allStudent.filter((i) =>{
            return i.id.toString() === id.toString();
        });
        return student;
    }
    onSubmitStudentForm =(e,p) =>{
        p.preventDefault();
        const newData ={
            s_date: e.s_date,
                e_date: e.e_date,
                car_number: e.car_number,
                bran: e.bran,
                serie: e.serie,
                color: e.color,
                c_year: e.c_year,
                gear: e.gear,
                model_number: e.model_number,
                insurance: e.insurance,
                c_name: e.c_name,
                address: e.address,
                e_mail: e.e_mail,
                c_tel: e.c_tel,
                d_detail: e.d_detail,
                damage: e.damage,
                acc_tools: e.acc_tools,
        }
        this.props.editStudentAtStore(newData);
        this.props.history.push('/');

    }
    render(){
        return(
            <div className="row mt-3 mb-5 ml-5 mr-5">
                <HeaderJob/>
                       
                <div className="card col-88 col-sm-8 col-lg-6 mx-auto"> 
                 <form onSubmit={this.onSubmitStudentForm.bind(this,this.state)}>
                    <div className="card-body">
                        <div className="block-4 text-center">
                       
                        </div>
                        <div className="form-group">
                            <label>วันที่เข้าซ่อม</label>
                            <input 
                                type="date"
                                name="s_date"
                                className="form-control"
                                value={this.state.s_date}
                                onChange={this.onChangeData}disabled
                            />
                        </div>
                        <div className="form-group">
                            <label>วันที่นัดรับ</label>
                            <input 
                                type="date"
                                name="e_date"
                                className="form-control"
                                value={this.state.e_date}
                                onChange={this.onChangeData}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label>ทะเบียนรถ</label>
                            <input 
                                type="text"
                                name="car_number"
                                className="form-control"
                                value={this.state.car_number}
                                onChange={this.onChangeData}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label>ยี่ห้อ</label>
                            <input 
                                type="text"
                                name="bran"
                                className="form-control"
                                
                                onChange={this.onChangeData}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label>รุ่น</label>
                            <input 
                                type="text"
                                name="serie"
                                className="form-control"
                                onChange={this.onChangeData}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label>สี</label>
                            <input 
                                type="text"
                                name="color"
                                className="form-control"
                                onChange={this.onChangeData}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label>ปี</label>
                            <input 
                                type="text"
                                name="c_year"
                                className="form-control"
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>เกียร์</label>
                            <select
                                disabled
                                name="gear" 
                                className="form-control"
                                onChange={this.onChangeData}
                                >
					            <option value="Manual">Manual</option>
                                <option value="Auto">Auto</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>หมายเลขตัวถัง</label>
                            <input 
                                type="text"
                                name="model_number"
                                className="form-control"
                                onChange={this.onChangeData}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>บริษัทประกัน</label>
                            <input 
                                type="text"
                                name="insurance"
                                className="form-control"
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>ชื่อลูกค้า</label>
                            <input 
                                type="text"
                                name="c_name"
                                className="form-control"
                                onChange={this.onChangeData}
                            />
                        </div>
                       
                        <div className="form-group">
                            <label>ที่อยู่</label>
                            <input 
                                type="text"
                                name="address"
                                className="form-control"
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input 
                                type="text"
                                name="e_mail"
                                className="form-control"
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>เบอร์โทรศัพท์</label>
                            <input 
                                type="text"
                                name="c_tel"
                                className="form-control"
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>รายละเอียด/รายการซ่อม**</label>
                            <input 
                                type="text"
                                name="d_detail"
                                className="form-control"
                                onChange={this.onChangeData}
                            />
                        </div> <div className="form-group">
                            <label>ระดับความเสียหาย</label>
                            <select name="damage" 
                                className="form-control"
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
                                name="ac_tools"
                                className="form-control"
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
const mapStateToProps = state => {
    return {
        studentsFromStore : state.oJob
    }
}
const mapDispatchToProps = dispatch => {
    return {
        editStudentAtStore : (id) => {
            return dispatch({ type : 'EDIT_JOB', payload : id })
        }
    }       
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerFrom);