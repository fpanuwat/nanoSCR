import React, { Component } from 'react';
import detail1 from '../Task/Data-detail/jb-detail/detail1';

class detailJob extends Component{
   
    render(){
        const daten1 = new Date(this.props.data.end_date);
          const  date1 = daten1.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          const daten2 = new Date(this.props.data.end_date);
          const  date2 = daten2.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          const daten3 = new Date(this.props.data.report_date);
          const  date3 = daten3.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          const daten4 = new Date(this.props.data.acc_date);
          const  date4 = daten4.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

        return(
           <div>
                <table className="table table-bordered">
                                <thead  class="thead-light">
                                    <tr>
                                        <th>#</th>
                                        <th>รายงานความเสียหาย</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                       <td></td>
                                        <td>{this.props.data.d_detail}</td>
                                    </tr>
                                </tbody>
                                </table>
                            <table className="table table-bordered">
                                <thead  class="thead-light">
                                    <tr>
                                        <th>ทะเบียนรถ</th>
                                        <th>ประเภทรถ</th>
                                        <th>ยี่ห้อ</th>
                                        <th>รุ่นรถ</th>
                                        <th>หมายเลขตัวถัง</th>
                                        <th>หมายเลขกิโล</th>
                                        <th>ระดับความเสียหาย</th>
                                        <th>สีรถเดิม</th>
                                        <th>สีรถที่พ่น</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.props.data.car_number}</td>
                                        <td>{this.props.data.car_type}</td>
                                        <td>{this.props.data.bran}</td>
                                        <td>{this.props.data.serie}</td>
                                        <td>{this.props.data.model_number}</td>
                                        <td>{this.props.data.kilo_numb}</td>
                                        <td>{this.props.data.damage}</td>
                                        <td>{this.props.data.color}</td>
                                        <td>{this.props.data.n_color}</td>

                                    </tr>
                                </tbody>
                            </table>

                            <table className="table table-bordered">
                            <thead  class="thead-light">
                                <tr>
                                    <th>ชื่อลูกค้า</th>
                                    <th>เลขบัตรประจำตัวประชาชน</th>
                                    <th>เลขบัตรใบขับขี่</th>
                                    <th>ที่อยู่</th>
                                    <th>เบอร์โทรศัพท์</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.props.data.c_name}</td>
                                    <td>{this.props.data.id_customer}</td>
                                    <td>{this.props.data.c_card_number}</td>
                                    <td>{this.props.data.address}</td>
                                    <td>{this.props.data.c_tel}</td>
                                </tr>
                            </tbody>
                            </table>
                            <table className="table table-bordered">
                                <thead  class="thead-light">
                                    <tr>
                                        <th>วันที่เข้าซ่อม</th>
                                        <th>วันที่นัดรับ</th>
                                        <th>ผู้รับรายงาน</th>
                                        <th>ผู้รับรถเข้าซ่อม</th>
                                        <th>ผู้นำรถเข้าซ่อม</th>
                                        <th>เบอร์ติดต่อ</th>
                                        <th>วันที่อู่ออกรายงาน</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <td>{date1}</td>
                                        <td>{date2}</td>
                                        <td>{this.props.data.rep_name}</td>
                                        <td>{this.props.data.re_name}</td>
                                        <td>{this.props.data.c_name}</td>
                                        <td>{this.props.data.i_tel}</td>
                                        <td>{this.props.data.date_time}</td>
                                    </tr>
                                </tbody>
                                </table>
                                <table className="table table-bordered">
                                <thead  class="thead-light">
                                <tr>
                                    <th>บริษัทประกัน</th>
                                    <th>สาขา</th>
                                    <th>หมายเลขกรมธรรม์</th>
                                    <th>ประเภทกรมธรรม์</th>
                                    <th>เลขที่เคลม</th>
                                    <th>วงเงินคุ้มครอง</th>
                                    <th>เลขที่แจ้งอุบัติเหตุ</th>
                                    <th>วันที่แจ้งอุบัติเหตุ</th>
                                    <th>วันที่เกิดอุบัติเหตุ</th>
                                    <th>เบอร์โทรศัพท์</th>
                                    <th>เบอร์แฟกซ์</th>
                                </tr></thead>
                                <tbody>
                                <tr>
                                    <td>{this.props.data.insurance}</td>
                                    <td>{this.props.data.sub_insurance}</td>
                                    <td>{this.props.data.ins_number}</td>
                                    <td>{this.props.data.ins_type}</td>
                                    <td>{this.props.data.clam_number}</td>
                                    <td>{this.props.data.limit_amount}</td>

                                    <td>{this.props.data.acc_number}</td>
                                
                                    <td>{date3}</td>
                                
                                    <td>{date4}</td>
                                
                                    <td>{this.props.data.ins_tel}</td>
                                
                                    <td>{this.props.data.ins_fax}</td>
                                </tr></tbody>
                                </table>  
                                </div>
     
        )
    }
    
}
export default detailJob;
/*
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
}*/

