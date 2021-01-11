import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './header-task';

class Task extends Component{
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
        emp_name: 'สมจิตร มิตรสหาย',
        job_number: '',
        status: false
    }
    onChangeData = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    componentWillMount() {
        const userId =this.props.match.params.id;
        const e = this.getCurrentStudent(userId);
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
                status: e.status
            })
          
        }else{
            this.props.history.push('/');
            
        } 
    }
    getCurrentStudent(id){
        const allStudent = this.props.studentsFromStore;
        const [student] =allStudent.filter((i) =>{
            return i.id.toString() === id.toString();
        });
        return student;
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
                status: e.status
            
        }
        this.props.editStudentAtStore(newData);
        console.log(this.state.status);
        this.props.history.push('/loadTask');

    }
    changeColor = () => {
        this.setState({status: true});
        console.log(this.state.status);
        alert(this.state.status);
    }
   
    render(){
        return(
        <form onSubmit={this.onSubmitStudentForm.bind(this,this.state)} >
            
        <div className="">
                <Header/>
                <div className="row">
                    <div className="col-md"></div>
                    <div className="col-md"></div>
                    <div className="col-md"></div>
                    <div className="col-md"></div>
                    <div className="col-md">{this.state.status}</div>
                    <div className="col-md">
                        <button className="btn btn-outline-success btn-sm mr-1" type="submit"
                                   onClick={this.changeColor} >หยิบงาน</button>
                        <button className="btn btn-outline-danger btn-sm mr-1"
                                    onClick={ ()=> this.props.history.push('/loadTask')}>กลับ</button>
                    </div>
                </div>
               
            <div className="container margin-top:30px">
                    <div className="row">
                        <div className="col-sm-2">
                    
                            <ul className="nav nav-pills flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href={'/customer/'+ this.state.id}>ข้อมูลลูกค้า</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={'/aboutCar/'+ this.state.id}>รายละเอียดรถ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={'/insurance/'+ this.state.id}>ข้อมูลประกัน</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={'/aboutDate/'+ this.state.id}>การรับและส่งรถ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={'/aboutDamage/'+ this.state.id}>การรับและส่งรถ</a>
                                </li>
                            </ul>
                        </div>
                    
                    
                        <div className="col-sm-8">
                            <table className="table table-bordered">
                            <tr>
                                    <th>ชื่อลูกค้า</th>
                                    <td>{this.state.c_name}</td>
                                </tr>
                               <tr>
                                    <th>เลขบัตรประจำตัวประชาชน</th>
                                    <td>{this.state.id_customer}</td>
                                </tr>
                                <tr>
                                    <th>เลขบัตรใบขับขี่</th>
                                    <td>{this.state.c_card_number}</td>
                                </tr>
                                <tr>
                                    <th>ที่อยู่</th>
                                    <td>{this.state.address}</td>

                                </tr>
                                <tr>
                                    <th>เบอร์โทรศัพท์</th>
                                    <td>{this.state.c_tel}</td>

                                </tr>
                            </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Task);
