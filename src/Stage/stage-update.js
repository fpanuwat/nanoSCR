import React from 'react';
import { Component } from 'react';
import Header from '../Task/header-task';
import StageDetail from './stage-detail';
import ReactSession from '../ReactSession/ReactSession';
class stageUpdate extends Component{
    state = {
        stage:[],
        detail:'',
        emp_id:'',
       employee: [],
       job_number:'',
       dpt_name:'',
       emp_name: '',
        emp_lname: '',
        cl_dept : "ปิดงาน",
        cl_comment : "ปิดงาน"
        


    }
    onChangeData = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }
   componentWillMount=()=> {
        //ReactSession.setStoreType("localStorage");
        
       const user = ReactSession.get("engineer");
       console.log(user);
        const  id =this.props.match.params.id.toString();
        fetch('http://localhost:3001/api/loadStage/'+id)
            .then((response) => response.json())
            .then(List => {
                //console.log(List);
                this.setState({ stage: List });
                
            });
        fetch('http://localhost:3001/api/checkerMember/'+user)
        .then((response) => response.json())
        .then(List => {
            this.setState({
                emp_name: List[0].emp_name,
                emp_lname: List[0].emp_lname
            })
            fetch('http://localhost:3001/api/loadDpt/'+List[0].author)
            .then((response) => response.json())
            .then(List => {
                this.setState({dpt_name: List[0].dpt_name})
            });  
            
        });  
        fetch('http://localhost:3001/api/getJobD1/'+id)
        .then((response) => response.json())
        .then(List => {
           
            this.setState({ 
                job_number: List[0].job_number,
                start_date: List[0].start_date,
                end_date: List[0].end_date
            });
            
        });  
     } 

    closeJob =(e) =>{
        if(this.state.comment === ''||this.state.comment === 'undefined'||this.state.comment === null||this.state.comment === undefined){
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
        }else{
            const requestOptions1 = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer my-token',
                    'My-Custom-Header': 'foobar'
                },
                body: JSON.stringify({ 
                    comment: this.state.comment,
                    detail: this.state.cl_dept,
                    emp_name: this.state.emp_name,
                    job_number: this.props.match.params.id.toString(),
                    date_time: this.state.date_time
                })
            };
            fetch('http://localhost:3001/api/insertStage', requestOptions1)
            .then(response => response.json())
        }
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
        this.props.history.push('/loadTask');
    }
   
    onSubmit=(e)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
                'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({ 
                comment: this.state.comment,
                detail: this.state.dpt_name,
                emp_name: this.state.emp_name,
                job_number: this.props.match.params.id.toString(),
                date_time: this.state.date_time
            })
        };
            fetch('http://localhost:3001/api/insertStage', requestOptions)
                .then(response => response.json())
                window.location.reload();
    }
    
    render(){
        const date = new Date(this.state.start_date);
        const date1 = date.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          const datee = new Date(this.state.end_date);
          const date2 = datee.toLocaleDateString('th-TH', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
        return(
            <div className="container">
                <Header/>           
                
                    <div class="row">
                    
                         <div class="col">
                         <p>พนักงาน: {this.state.emp_name} {this.state.emp_lname}</p>    
                        </div>
                        <div class="col">
                         <p>ฝ่าย: {this.state.dpt_name}</p>  
                        </div>
                        <div class="col">
                        </div>
                        <div class="col">
                        </div>
                        <div class="col">
                        </div>    
                        <div class="row">
                            <button className="btn btn-success" onClick={e =>
                                window.confirm("ต้องการปิดงานนี้หรือไม่?") && this.closeJob(e)
                                }>ปิดงาน</button>
                            <button className="btn btn-sm btn-primary ml-1" onClick={e =>
                                window.confirm("ต้องการอัพเคตงานนี้หรือไม่?") && this.onSubmit(e)
                            }>อัพเดต</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label >หมายเหตุ</label>
                        <textarea id="comment" 
                        name="comment" onChange={this.onChangeData} placeholder="กรอกรายละเอียดงาน.."
                        rows="4" cols="50" className="form-control">
                       
                        </textarea>
                    </div>
                    <div className ="container">
                        
                        <table className="table ">
                            <thead className="thead-light">
                               
                                <th>Job Number</th>
                                <th>วันที่รับรถ</th>
                                <th>วันที่ต้องส่งรถ</th>
                                <th></th>
                            </thead>
                           <tbody className=" " >
                                <td>{this.state.job_number}</td>
                                <td>{date1}</td>
                                <td>{date2}</td>
                                <td></td>
                            </tbody>
                        </table>
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
                    </div>
                
                
         </div>
        )
    }
}export default stageUpdate;