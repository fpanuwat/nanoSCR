import React, { Component } from 'react';
import Car from './car-detail';
import Cus from './cus-detail';
import Ins from './ins-detail';
import Jobx from './job-detail';
import Dm from './dam-detail';
import Header from '../../../JobFolder/Header-Job';
import {Link} from 'react-router-dom';
class detail1 extends Component{
   state = {
        Job:[],
        cus:[],
        Ins:[],
        car:[],
        dam:[]
   }
   componentWillMount() {
    const id =this.props.match.params.id;
     //const e = this.getCurrentCustomer(userId);*/
     fetch('http://localhost:3001/api/getJobD1/'+id)
     .then((response) => response.json())
     .then(List => {
         //console.log(List);
         this.setState({ Job: List });
         
    
        fetch('http://localhost:3001/api/getCar/'+List[0].car_number)
        .then((response) => response.json())
        .then(List => {
            console.log(List);
            this.setState({ car: List });
            fetch('http://localhost:3001/api/getCus/'+List[0].car_number)
            .then((response) => response.json())
            .then(List => {
                // console.log(List);
                this.setState({ cus: List });
                
            });
            fetch('http://localhost:3001/api/getIns/'+List[0].car_number)
            .then((response) => response.json())
            .then(List => {
                //console.log(List);
                this.setState({ Ins: List });
                
            });
        });
     });
     fetch('http://localhost:3001/api/loadStage/'+id)
        .then((response) => response.json())
        .then(List => {
            console.log(List);
            this.setState({ dam: List });
        
    });
    
 }
    render(){
       
        return(
           <div className="container">
               <Header/>
               <Link to={'/loadLe'}>
                        <button className="btn btn-primary  float-right">back</button>
                </Link>
                <div className="container">
                <table className="table table-bordered">
                    <thead  class="thead-light">
                        <tr style={{textAlign:"center"}}>
                            <th>กระบวการซ่อม</th>
                            <th>รายละเอียด</th>
                            <th>พนักงาน</th>
                            <th>วันที่ทำการซ่อม</th>
                            <th>เวลา</th>
                        </tr>
                    </thead>
                    {
                        this.state.dam.map(items =>(
                            <tbody className="col-12 col-sm-6 col-lg-4 mt-3 " key={items.id}>
                                
                                <Dm data={items}/>
                            </tbody>
                        ))
                    }
                              
                </table>
                <table className="table table-bordered">
                    <thead  class="thead-light">
                        <tr style={{textAlign:"center"}}>
                            <th>ทะเบียนรถ</th>
                            <th>ประเภทรถ</th>
                            <th>ยี่ห้อ</th>
                            <th>รุ่นรถ</th>
                            <th>หมายเลขตัวถัง</th>
                            <th>หมายเลขกิโล</th>
                            <th>สีรถเดิม</th>
                            
                        </tr>
                    </thead>
                    {
                        this.state.car.map(items =>(
                            <tbody className="col-12 col-sm-6 col-lg-4 mt-3 " key={items.id}>
                                <Car data={items}/>
                            </tbody>
                        ))
                    }
                    
                </table>
                <table className="table table-bordered">
                    <thead  class="thead-light">
                        <tr style={{textAlign:"center"}}>
                            <th>ชื่อลูกค้า</th>
                            <th>เลขบัตรประจำตัวประชาชน</th>
                            <th>เลขบัตรใบขับขี่</th>
                            <th>ที่อยู่</th>
                            <th>เบอร์โทรศัพท์</th>
                            
                        </tr>
                    </thead>
                    {
                        this.state.cus.map(items =>(
                            <tbody className="col-12 col-sm-6 col-lg-4 mt-3 " key={items.id}>
                                <Cus data={items}/>
                            </tbody>
                        ))
                     }
                           
                </table>

                <table className="table table-bordered">
                    <thead  class="thead-light">
                        <tr style={{textAlign:"center"}}>
                            <th>วันที่เข้าซ่อม</th>
                            <th>วันที่นัดรับ</th>
                            <th>ผู้รับรายงาน</th>
                            <th>ผู้รับรถเข้าซ่อม</th>
                            <th>ผู้นำรถเข้าซ่อม</th>
                            <th>เบอร์ติดต่อ</th>
                            <th>ระดับความเสียหาย</th>
                            <th>สีรถที่พ่น</th>
                            <th>วันที่อู่ออกรายงาน</th>
                        </tr>
                    </thead>
                    {
                        this.state.Job.map(items =>(
                            <tbody className="col-12 col-sm-6 col-lg-4 mt-3 " key={items.id}>
                                <Jobx data={items}/>
                            </tbody>
                        ))
                    }
                </table>
                <table className="table table-bordered">
                    <thead  class="thead-light">
                        <tr style={{textAlign:"center"}}>
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
                        </tr>
                    </thead>
                    {
                        this.state.Ins.map(items =>(
                            <tbody className="col-12 col-sm-6 col-lg-4 mt-3 " key={items.id}>
                                <Ins data={items}/>
                            </tbody>
                        ))
                    }
                </table>        
                            
                </div>              
            </div>
     
        )
    }
    
}
export default detail1;
