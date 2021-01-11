import React, { Component } from 'react';
import Car from './car-detail';
import Cus from './cus-detail';
import Ins from './ins-detail';
import Jobx from './job-detail';
import Ddm from './dam-detail';
import Header from '../../../JobFolder/Header-Job';
import {Link} from 'react-router-dom';
import ReactSession from '../../../ReactSession/ReactSession';

import StageDetail from '../../../Stage/stage-detail';
class detail1 extends Component{
   state = {
        Job:[],
        cus:[],
        Ins:[],
        car:[],
        dm:[],
        car_number:'',
        stage:[],
        cl_dept : "ปิดงาน",
        cl_comment : "ปิดงาน",
        emp_name: '',
        emp_lname: '',
        counter: '',
        status:''
   }
   checkStatus =(e)=>{
        console.log(e);
       if(e===0){
            return true;
       }else{
            return false;
       }

   }
   componentWillMount() {
        const user = ReactSession.get("front");
        const id =this.props.match.params.id;
        fetch('http://localhost:3001/api/checkerMember/'+user)
            .then((response) => response.json())
            .then(List => {
                this.setState({
                    emp_name: List[0].emp_name,
                    emp_lname: List[0].emp_lname
                })
            
            
        });  
    fetch('http://localhost:3001/api/loadStage/'+id)
    .then((response) => response.json())
    .then(List => {
        this.setState({ 
            stage: List,
            counter: List.length 
        });
        
    });
     //const e = this.getCurrentCustomer(userId);*/
     fetch('http://localhost:3001/api/getJobD1/'+id)
     .then((response) => response.json())
     .then(List => {
         //console.log(List[0].status);
         this.setState({ Job: List,
            status: List[0].status
        });
       
        fetch('http://localhost:3001/api/getDam/'+id)
        .then((response) => response.json())
        .then(List => {
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
    })
     console.log(this.state.car_number);
    }
     closeJob =(e) =>{
        
            const requestOptions1 = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer my-token',
                    'My-Custom-Header': 'foobar'
                },
                body: JSON.stringify({ 
                    comment: this.state.cl_comment,
                    detail: this.state.cl_dept,
                    emp_name: this.state.emp_name,
                    job_number: this.props.match.params.id.toString(),
                    date_time: this.state.date_time
                })
            };
            fetch('http://localhost:3001/api/insertStage', requestOptions1)
            .then(response => response.json())
            const id =this.props.match.params.id.toString();
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer my-token',
                    'My-Custom-Header': 'foobar'
                }
            };
           fetch('http://localhost:3001/api/closeStage/'+id,requestOptions)
                    .then(response => response.json())
            this.props.history.push('/loadLe');
       
    }
   
    render(){
        
        return(
           <div className="container">
               <Header/>
               <div className="container">

                    <button className="btn btn-success" 
                        disabled={this.checkStatus(this.state.status)}
                        onClick={e =>
                            window.confirm("ต้องการปิดงานนี้หรือไม่?") && this.closeJob(e)
                        }>ปิดงาน</button>
                    <Link to={'/loadJob'}>
                            <button className="btn btn-primary">back</button>
                    </Link>
                </div>
                <div>
                <table className="table ">
                            <thead className="thead-light">
                                <th>#</th>
                                <th>การะบวนการซ่อม</th>
                                <th>รายละเอียด</th>
                                <th>พนักงาน</th>
                                <th>วันที่ซ่อม</th>
                                <th>เวลาที่ซ่อม</th>
                            </thead>
                        {
                            this.state.stage.map(items =>(
                                <tbody className=" " key={items.id}>
                                    
                                    <StageDetail data={items}/>
                                    
                                </tbody>
                            ))
                    
                        }
                            
                        </table>
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
