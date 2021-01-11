import React, { Component } from 'react';
import Task from './task';
import Header from "./header-task";
//import {Link} from 'react-router-dom';
class TaskList extends Component{
    state={
        job:[],
        key:'',
        key2:''
    }
    componentWillMount() {
        fetch('http://localhost:3001/api/loadJobO')
         .then((response) => response.json())
         .then(List => {
             console.log(List);
             this.setState({ job: List });
             
         });
         
     }  
     onChangeData = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    reDate =(event)=>{
        const dates = new Date(event);
        const  result = dates.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          return result
    }
    /*selectSeach = (e) =>{
        if(e===1||e==='1'){
            return this.state.job.filter(event =>  event.car_number.includes(this.state.key)).map(filteredResult => (
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Job No.</th>
                        <th>ทะเบียนรถ</th>
                        <th>วันที่รับรถ</th>
                        <th>วันที่ส่งรถ</th>
                        <th>วันที่ปิดงาน</th>
                        <th>ดูรายระเอียด</th>
                      
                    </tr>
                </thead>           
                    <tbody>
                        <td>{filteredResult.job_number}</td>
                        <td>{filteredResult.car_number}</td>
                        <td>{this.reDate(filteredResult.start_date)}</td>
                        <td>{this.reDate(filteredResult.end_date)}</td>
                        <td>{this.reDate(filteredResult.date_time)}</td>
                        <td>
                            <Link to={'/closeJ/'+filteredResult.job_number}>
                                <button className="btn btn-success btn-sm float-right">รายละเอียด</button>
                            </Link></td>
                    </tbody></table>
                    ))
            
        }else if(e===2||e==='2'){
            return this.state.job.filter(event =>  event.job_number.includes(this.state.key)).map(filteredResult => (
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Job No.</th>
                        <th>ทะเบียนรถ</th>
                        <th>วันที่รับรถ</th>
                        <th>วันที่ส่งรถ</th>
                        <th>วันที่ปิดงาน</th>
                        <th>ดูรายระเอียด</th>
                      
                    </tr>
                </thead>       
                <tbody>
                    <td>{filteredResult.job_number}</td>
                    <td>{filteredResult.car_number}</td>
                    <td>{this.reDate(filteredResult.start_date)}</td>
                    <td>{this.reDate(filteredResult.end_date)}</td>
                    <td>{this.reDate(filteredResult.date_time)}</td>
                    <td>
                        <Link to={'/closeJ/'+filteredResult.job_number}>
                            <button className="btn btn-success btn-sm float-right">รายละเอียด</button>
                        </Link></td>
                </tbody></table>
                ))

        }else{
         return   this.state.job.filter(event =>  event.job_number.includes(this.state.key)).map(filteredResult => (
                    
                <div></div>
                ))
            }
    }*/
    render(){
     /*   const options = [
            {
                label: "-ค้นหาด้วย-",
                value: "0",
            },
            {
              label: "Job No.",
              value: "2",
            },
            {
              label: "ทะเบียนรถ",
              value: "1",
            }
        ];*/
        return(
        
            <div className="container-sm">
                <Header/>
               
                
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Job No.</th>
                            <th>ทะเบียนรถ</th>
                            <th>วันรับรถ</th>
                            <th>วันส่งรถ</th>
                            <th>สถานะ</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        this.state.job.map(items =>(
                            <tbody className="col-12 col-sm-6 col-lg-4 mt-3 " key={items.id}>
                                <Task data={items}/>
                            </tbody>
                        ))
                    }    
                </table>
            </div>
            
        )
    }
}
export default TaskList;
/**
 *  <div> 
                      <select onChange={this.onChangeData} name='key2'>
                        {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <input className="form-control" id="key" name="key" type="text" placeholder="ค้นหา..." onChange={this.onChangeData}/>

                </div>
               
                    {
                        this.selectSeach(this.state.key2)
                    }
 */