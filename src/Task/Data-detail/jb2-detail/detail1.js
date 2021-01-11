import React, { Component } from 'react';
import Car from './car-detail';
import Cus from './cus-detail';
import Ins from './ins-detail';
import Jobx from './job-detail';
import Ddm from './dam-detail';
import Header from '../../header-task';
import {Link} from 'react-router-dom';
class detail1 extends Component{
   state = {
        Job:[],
        cus:[],
        Ins:[],
        car:[],dm:[]
   }
   componentWillMount() {
    const id =this.props.match.params.id;
     //const e = this.getCurrentCustomer(userId);*/
     fetch('http://localhost:3001/api/getJobD1/'+id)
     .then((response) => response.json())
     .then(List => {
         //console.log(List);
         this.setState({ Job: List });
         
    
     fetch('http://localhost:3001/api/getDam/'+id)
     .then((response) => response.json())
     .then(List => {
         //console.log(List);
         this.setState({ dm: List });
         
     });
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
    
    
 }
 onSubmitJob =(e) =>{
    const id =this.props.match.params.id.toString();
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        }

     
    };
    fetch('http://localhost:3001/api/oStage/'+id, requestOptions)
        .then(response => response.json())
    this.props.history.push('/loadStage');

}
    render(){
       
        return(
           <div className="container">
               <Header/>
               
                <div class="btn">
                    <Link to={'/loadTask'}>
                        <button className="btn btn-sm btn-primary ml-1">back</button>
                </Link>
                                    <button className="btn btn-sm btn-warning ml-1 "
                                            onClick={e =>
                                                window.confirm("ต้องการหยิบงานนี้หรือไม่?") && this.onSubmitJob(e)}
                                        >หยิบงาน</button>
                                </div>
                <div>
                <table className="table table-bordered">
                    <thead  class="thead-light">
                        <tr>
                            <th>#</th>
                            <th>รายงานความเสียหาย</th>
                        </tr>
                    </thead>
                    {
                        this.state.dm.map(items =>(
                            <tbody className="col-12 col-sm-6 col-lg-4 mt-3 " key={items.id}>
                                <Ddm data={items}/>
                            </tbody>
                        ))
                    }     
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
                        <tr>
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
                        <tr>
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
