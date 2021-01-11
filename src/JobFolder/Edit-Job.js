import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header-Job';

class EditJ extends Component{
   
    state = {
        job:[]
    }
    onChangeData = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    componentWillMount() {
           // const userId =this.props.match.params.id;
         fetch('http://localhost:3001/api/getJob')
         .then((response) => response.json())
         .then(List => {
             //console.log(params.job_number);
             this.setState({ job: List });
             
         });
       
     }
    onSubmitStudentForm =(e,p) =>{
        p.preventDefault();
        const newData ={
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
            c_card_number: e.c_card_number,
            car_type: e.car_type,
            kilo_numb: e.kilo_numb,
            id_customer: e.id_customer,
            acc_date: e.acc_date,
            acc_number: e.acc_number,
            insurance: e.insurance,
            sub_insurance: e.sub_insurance,
            ins_tel: e.ins_tel,
            ins_fax: e.ins_fax,
            ins_number: e.ins_number,
            ins_type: e.ins_type,
            clam_number: e.clam_number,
            limit_amount: e.limit_amount,
            ins_fax: e.ins_fax,
            report_date: e.report_date,
            re_name: e.re_name,
            rep_name: e.rep_name,
            i_name: e.i_name,
            i_tel: e.i_tel,
            n_color: e.n_color,
            job_number: e.job_number,
            get_job: e.get_job,
            status: e.status
        }
        this.props.editStudentAtStore(newData);
        this.props.history.push('/loadJob');

    }
    render(){
        return(<form onSubmit={this.onSubmitStudentForm.bind(this,this.state)} >
                <div className="container">
                    <Header/>  
                    <div className="">
                                <div class="btn">
                                    <button className="btn btn-outline-danger btn-sm mr-1"
                                            onClick={ ()=> this.props.history.push('/loadJob')}>Cancle</button>
                                </div>
                                <div class="btn">
                                    <button className="btn btn-sm btn-primary ml-1 "
                                            type="submit">Update</button>
                                </div>
                       </div>    
                    <div className="row">
                        <h1>user:{this.props.match.params.id}</h1>
                               
                        <div className="col mx-auto"> 
                            <div className="card">
                                <div className="card-body">
                                <h5>ข้อมูลลูกค้า*</h5>
                                    <div className="form-group">
                                        <label>ชื่อลูกค้า</label>
                                        <input 
                                            type="text"
                                            name="c_name"
                                            className="form-control"
                                            value={this.state.c_name}
                                            onChange={this.onChangeData}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>เลขบัตรประจำตัวประชาชน</label>
                                        <input 
                                            type="text"
                                            name="id_customer"
                                            className="form-control"
                                            value={this.state.id_customer}
                                            onChange={this.onChangeData}
                                            
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>เลขบัตรใบขับขี่</label>
                                        <input 
                                            type="text"
                                            name="c_card_number"
                                            className="form-control"
                                            value={this.state.c_card_number}
                                            onChange={this.onChangeData}
                                            
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>ที่อยู่</label>
                                        <input 
                                            type="text"
                                            name="address"
                                            className="form-control"
                                            value={this.state.address}
                                            onChange={this.onChangeData}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>เบอร์โทรศัพท์</label>
                                        <input 
                                            type="text"
                                            name="c_tel"
                                            className="form-control"
                                            value={this.state.c_tel}
                                            onChange={this.onChangeData}
                                            
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card">
                                <div className="card-body">
                                    <h5>รายละเอียดรถ</h5>
                                    <div className="form-group">
                                        <label>ทะเบียนรถ*</label>
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
                                            <label>ประเภทรถ*</label>
                                            <select name="car_type" 
                                                className="form-control"
                                                value= {this.state.car_type}
                                                onChange={this.onChangeData}
                                                >
                                                <option value="รถยนต์นั่ง">รถยนต์นั่ง</option>
                                                <option value="รถอเนกประสงค์">รถยนต์อเนกประสงค์</option>
                                                <option value="รถกระบะ">รถกระบะ</option>
                                            </select>

                                        </div>
                                        <div className="form-group">
                                            <label>รุ่นรถ*</label>
                                            <input 
                                                type="text"
                                                name="serie"
                                                className="form-control"
                                                value={this.state.serie}
                                                onChange={this.onChangeData}
                                                disabled
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>ยี่ห้อ*</label>
                                            <input 
                                                type="text"
                                                name="bran"
                                                className="form-control"
                                                value={this.state.bran}
                                                onChange={this.onChangeData}
                                                disabled
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>หมายเลขตัวถัง *</label>
                                            <input 
                                                type="text"
                                                name="model_number"
                                                className="form-control"
                                                value={this.state.model_number}
                                                onChange={this.onChangeData}
                                                disabled
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>หมายเลขกิโล</label>
                                            <input 
                                                type="text"
                                                name="kilo_numb"
                                                className="form-control"
                                                value={this.state.kilo_numb}
                                                onChange={this.onChangeData}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>ระดับความเสียหาย</label>
                                            <select name="damage" 
                                                className="form-control"
                                                onChange={this.onChangeData}
                                                value ={this.state.damage}
                                                disabled>
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
                                            <label>สีรถ</label>
                                            <input 
                                                type="text"
                                                name="color"
                                                className="form-control"
                                                value={this.state.color}
                                                onChange={this.onChangeData}
                                                disabled
                                            />
                                        </div>
                                    
                                        <div className="form-group">
                                            <label>สีที่พ่น *</label>
                                            <input 
                                                type="text"
                                                name="n_color"
                                                value={this.state.n_color}
                                                className="form-control"
                                                onChange={this.onChangeData}
                                            />
                                        </div>
                                    </div>
                                </div>
                        </div>  
                        
                        <div className="col mx-auto"> 
                            <div className="card">
                                <div className="card-body">
                                    <h5>รายละเอียดประกัน</h5>
                                    <div className="form-group">
                                        <label>บริษัทประกัน</label>
                                        <input 
                                            type="text"
                                            name="insurance"
                                            className="form-control"
                                            value={this.state.insurance}
                                            onChange={this.onChangeData}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>สาขา</label>
                                        <input 
                                            type="text"
                                            name="sub_insurance"
                                            className="form-control"
                                            value={this.state.sub_insurance}
                                            onChange={this.onChangeData}
                                            
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>เบอร์โทรศัพท์</label>
                                        <input 
                                            type="text"
                                            name="ins_tel"
                                            className="form-control"
                                            value={this.state.ins_tel}
                                            onChange={this.onChangeData}
                                            
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>เบอร์แฟกซ์</label>
                                        <input 
                                            type="text"
                                            name="ins_fax"
                                            className="form-control"
                                            value={this.state.ins_fax}
                                            onChange={this.onChangeData}
                                            
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>หมายเลขกรมธรรม์</label>
                                        <input 
                                            type="text"
                                            name="ins_number"
                                            className="form-control"
                                            value={this.state.ins_number}
                                            onChange={this.onChangeData}
                                            
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>ประเภทกรมธรรม์</label>
                                        <input 
                                            type="text"
                                            name="ins_type"
                                            className="form-control"
                                            value={this.state.ins_type}
                                            onChange={this.onChangeData}
                                            
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>เลขที่เคลม</label>
                                        <input 
                                            type="text"
                                            name="clam_number"
                                            className="form-control"
                                            value={this.state.clam_number}
                                            onChange={this.onChangeData}
                                            
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>วงเงินคุ้มครอง</label>
                                        <input 
                                            type="text"
                                            name="limit_amount"
                                            className="form-control"
                                            value={this.state.limit_amount}
                                            onChange={this.onChangeData}
                                            
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>เลขที่แจ้งอุบัติเหตุ</label>
                                        <input 
                                            type="text"
                                            name="acc_number"
                                            className="form-control"
                                            value={this.state.acc_number}
                                            onChange={this.onChangeData}
                                            
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>วันที่แจ้งอุบัติเหตุ</label>
                                        <input 
                                            type="date"
                                            name="report_date"
                                            className="form-control"
                                            value={this.state.report_date}
                                            onChange={this.onChangeData}
                                            
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>วันที่เกิดอุบัติเหตุ</label>
                                        <input 
                                            type="date"
                                            name="acc_date"
                                            className="form-control"
                                            value={this.acc_date}
                                            onChange={this.onChangeData}
                                            
                                        />
                                    </div>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5>การรับส่งรถ</h5> 
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
                                    <label>ผู้รับรายงาน</label>
                                    <input 
                                        type="text"
                                        name="report_name"
                                        className="form-control"
                                        value={this.state.report_name}
                                        onChange={this.onChangeData}
                                        
                                    />
                                </div>
                                <div className="form-group">
                                    <label>ผู้รับรถเข้าซ่อม</label>
                                    <input 
                                        type="text"
                                        name="rep_name"
                                        className="form-control"
                                        value={this.state.rep_name}
                                        onChange={this.onChangeData}
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <label>ผู้รับรถ</label>
                                    <input 
                                        type="text"
                                        name="re_name"
                                        className="form-control"
                                        value={this.state.re_name}
                                        onChange={this.onChangeData}
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <label>ผู้นำรถเข้าซ่อม</label>
                                    <input 
                                        type="text"
                                        name="i_name"
                                        className="form-control"
                                        value={this.state.i_name}
                                        onChange={this.onChangeData}
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <label>เบอร์ติดต่อ</label>
                                    <input 
                                        type="text"
                                        name="i_tel"
                                        className="form-control"
                                        value={this.state.i_tel}
                                        onChange={this.onChangeData}
                                        
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Job No.</label>
                                    <input 
                                        type="text"
                                        name="job_number"
                                        className="form-control"
                                        value={this.state.job_number}
                                        onChange={this.onChangeData}
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <label>วันที่อู่ออกรายงาน</label>
                                    <input 
                                        type="text"
                                        name="report_date"
                                        className="form-control"
                                        value={Date()}
                                        onChange={this.onChangeData}
                                        disabled
                                    />
                                    <input 
                                        type="hidden"
                                        name="status"
                                        className="form-control"
                                        value={0}
                                        onChange={this.onChangeData}
                                       
                                    />
                                </div>
                            </div>
                        </div>
                       
                    </div>
                
                </div>  
            </form>
        )
    }
    
}
const mapStateToProps = state => {
    return {
        studentsFromStore : state.job
    }
}
const mapDispatchToProps = dispatch => {
    return {
        editStudentAtStore : (id) => {
            return dispatch({ type : 'EDIT_JOB', payload : id })
        }
    }       
}

export default connect(mapStateToProps, mapDispatchToProps)(EditJ);