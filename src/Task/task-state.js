import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './header-task';
import Task from './task';

class TaskState extends Component{
    state={
        status:''
    }
    componentWillMount() {
        //const userId = this.props.match.params.id;
        const e = this.getCurrentJob();
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
            this.props.history.push('/loadTask');
            
        } 
    }
    getCurrentJob(){
        const allStudent = this.props.JobFromStore;
        const [student] = allStudent.filter((i) =>{
            return  i.status === '1';
        });
        console.log(student);
        return student
    }
    render(){
        const AllJob = this.props.jobFromStore;
        return(

            <div className="container-sm">
                <div>
                    <p>{this.state.job_number}</p>
                    <p>{this.state.status}</p>
                </div>

                <Header/>
                
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Job No.</th>
                            <th>ชื่อเจ้าของรถ</th>
                            <th>ทะเบียนรถ</th>
                            <th>วันรับรถ</th>
                            <th>วันส่งรถ</th>
                            <th>สถานะ</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>
           
        
            
        )
    }

}
const mapStateToProps = state => {
    return {
        JobFromStore : state.oJob
    }
}


export default connect(mapStateToProps,null)(TaskState);