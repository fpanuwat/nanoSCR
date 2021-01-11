import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../JobFolder/Header-Job';
class OpJob extends Component{
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
        c_card_number: '',
        car_type: '',
        kilo_numb: '',
        id_customer: '',
        acc_date: '',
        acc_number: '',
        insurance: '',
        sub_insurance: '',
        ins_tel: '',
        ins_fax: '',
        ins_number: '',
        ins_type: '',
        clam_number: '',
        limit_amount: '',
        ins_fax: '',
        report_date: '',
        re_name: '',
        rep_name: '',
        i_name: '',
        i_tel:'',
        n_color:'',
        emp_name: '',
        job_number: '',
        status:''
    }
    onChangeData = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    onSubmitStudentForm =(e) =>{
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
                'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({ 
                id: this.state.id,
                s_date: this.state.s_date,
                e_date: this.state.e_date,
                car_number: this.state.car_number,
                bran: this.state.bran,
                serie: this.state.serie,
                color: this.state.color,
                c_year: this.state.c_year,
                gear: this.state.gear,
                model_number: this.state.model_number,
                insurance: this.state.insurance,
                c_name: this.state.c_name,
                address: this.state.address,
                e_mail: this.state.e_mail,
                c_tel: this.state.c_tel,
                d_detail: this.state.d_detail,
                damage: this.state.damage,
                c_card_number: this.state.c_card_number,
                car_type: this.state.car_type,
                kilo_numb: this.state.kilo_numb,
                id_customer: this.state.id_customer,
                acc_date: this.state.acc_date,
                acc_number: this.state.acc_number,
                insurance: this.state.insurance,
                sub_insurance: this.state.sub_insurance,
                ins_tel: this.state.ins_tel,
                ins_fax: this.state.ins_fax,
                ins_number: this.state.ins_number,
                ins_type: this.state.ins_type,
                clam_number: this.state.clam_number,
                limit_amount: this.state.limit_amount,
                ins_fax: this.state.ins_fax,
                report_date: this.state.report_date,
                re_name: this.state.re_name,
                rep_name: this.state.rep_name,
                i_name: this.state.i_name,
                i_tel: this.state.i_tel,
                n_color: this.state.n_color,
                get_job: this.state.get_job,
                status: this.state.status,
                job_number: new Date().getTime().toString(),
                date_time: this.state.date_time
            })
    
         
        };
            fetch('http://localhost:3001/api/createJob', requestOptions)
                .then(response => response.json())
        
        this.props.history.push('/loadJob');

    }
    
    render(){
        const date = new Date();
        const result = date.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        const setJ=new Date().getTime().toString();
        return(<form onSubmit={this.onSubmitStudentForm} >
                <div className="container">
                    <Header/>  
                    <div className="">
                             <div >
                                    ประกัน
                                </div>
                                <div class="btn">
                                    <button className="btn btn-outline-danger btn-sm mr-1"
                                            onClick={ ()=> this.props.history.push('/loadJob')}>ยกเลิก</button>
                                </div>
                                <div class="btn">
                                    <button className="btn btn-sm btn-primary ml-1 "
                                            onClick={ ()=> this.props.history.push('/openJob')}
                                        >เข้าอู่เอง</button>
                                </div>
                                <div class="btn">
                                    <button className="btn btn-sm btn-primary ml-1 "
                                            type="submit"
                                        >สร้างงาน</button>
                                </div>
                       </div>    
                    <div className="row">
                                <input type="hidden" name="date_time" value={result}/>
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
                                            value={this.state.i_name}
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
                                            disabled
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
                                            disabled
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
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>E-mail</label>
                                        <input 
                                            type="text"
                                            name="e_mail"
                                            className="form-control"
                                            onChange={this.onChangeData}disabled
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
                                                
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>ประเภทรถ*</label>
                                            <select name="car_type" 
                                                className="form-control"
                                                onChange={this.onChangeData}
                                                >
                                                <option value="รถยนต์นั่ง" selected>รถยนต์นั่ง</option>
                                                <option value="รถอเนกประสงค์">รถยนต์อเนกประสงค์</option>
                                                <option value="รถกระบะ">รถกระบะ</option>
                                            </select>

                                        </div>
                                        <div className="form-group">
                                            <label>ยี่ห้อ*</label>
                                            <input 
                                                type="text"
                                                name="bran"
                                                className="form-control"
                                                value={this.state.bran}
                                                onChange={this.onChangeData}
                                                
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>รุ่นรถ*</label>
                                            <input 
                                                type="text"
                                                name="serie"
                                                className="form-control"
                                                value={this.state.serie}
                                                onChange={this.onChangeData}
                                                
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
                                <select name="gear" 
                                    className="form-control"
                                    onChange={this.onChangeData}
                                    >
                                    <option value="Manual" selected>Manual</option>
                                    <option value="Auto">Auto</option>
                                </select>
                            </div>
                                        <div className="form-group">
                                            <label>หมายเลขตัวถัง *</label>
                                            <input 
                                                type="text"
                                                name="model_number"
                                                className="form-control"
                                                value={this.state.model_number}
                                                onChange={this.onChangeData}
                                                
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
                                                >
                                                <option value="S" selected>S</option>
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

                                        <div className="form-group">
                                <label>รายละเอียด/รายการซ่อม**</label>
                                <input 
                                    type="text"
                                    name="d_detail"
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
                                        onChange={this.onChangeData}
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
                                    <label></label>
                                    <input 
                                        type="hidden"
                                        name="job_number"
                                        className="form-control"
                                        value={setJ}
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
                                        value={result}
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


export default OpJob;