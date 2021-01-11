import React, { Component } from 'react';
import Job from './Job';
import Header from "./Header-Job";
import {Link} from 'react-router-dom';

class JobLists extends Component{
    
    state = {
        job:[],
        username:'',
        member:[],
        key:'',
        key2:''
    }
    deleteOnClick = (e) =>{
        //const id = this.props.data.job_number.toString();
         fetch('http://localhost:3001/api/delete/'+e, {
             method: 'DELETE'
         }).then(res => res.text())
         .then(res => console.log(res));  
         window.location.reload();
       }  
      
       check =(e) =>{
         //console.log(status);
         if(e === 1){
           return "กำลังทำงาน";   
         }
         else if(e === 3){
             return "เสร็จงาน"; 
         }else{
             return "รอรับงาน"; 
         }
     }
    componentWillMount() {
        /* const userId =this.props.match.params.id;
        const e = this.getCurrentCustomer(userId);*/
        fetch('http://localhost:3001/api/getJob')
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
        console.log(e.target.value);
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
    selectSeach = (e) =>{
        if(e===1||e==='1'){
            return this.state.job.filter(event =>  event.car_number.includes(this.state.key)).map(filteredResult => (
                        
                    <tbody><tr className={(filteredResult.status ? 'table-active': 'table-warning')}>
                        <td>{filteredResult.job_number}</td>
                        <td>{filteredResult.car_number}</td>
                        <td>{this.reDate(filteredResult.start_date)}</td>
                        <td>{this.reDate(filteredResult.end_date)}</td>
                        <td>{this.reDate(filteredResult.date_time)}</td>
                        <td>{this.check(filteredResult.status)}</td>
                        <td>
                            <button 
                            className="btn btn-outline-danger btn-sm float-right ml-l"
                            onClick={e =>
                                window.confirm("ต้องการลบงานนี้หรือไม่?") && this.deleteOnClick(filteredResult.job_number)}
                            >delete</button>
                            <Link to={'/tdetail/'+filteredResult.job_number}>
                            <button className="btn btn-success btn-sm float-right">รายละเอียด</button>
                            </Link>
                        </td></tr>
                    </tbody>
                    ))
            
        }else {
            return this.state.job.filter(event =>  event.job_number.includes(this.state.key)).map(filteredResult => (
                       
                <tbody>
                    <tr className={(filteredResult.status ? 'table-active': 'table-warning')}>
                    <td>{filteredResult.job_number}</td>
                    <td>{filteredResult.car_number}</td>
                    <td>{this.reDate(filteredResult.start_date)}</td>
                    <td>{this.reDate(filteredResult.end_date)}</td>
                    <td>{this.check(filteredResult.status)}</td>
                    <td>
                         <button 
                        className="btn btn-outline-danger btn-sm float-right ml-l"
                        onClick={e =>
                            window.confirm("ต้องการลบงานนี้หรือไม่?") && this.deleteOnClick(filteredResult.job_number)}
                        >delete</button>
                        <Link to={'/tdetail/'+filteredResult.job_number}>
                        <button className="btn btn-success btn-sm float-right">รายละเอียด</button>
                        </Link>
                    </td></tr>
                </tbody>
                ))

        }
    }
    render(){
        const options = [
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
         ];
        return(
            <div className="container">
                <Header/>
                <div> 
                      <select onChange={this.onChangeData} name='key2'>
                        {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <input className="form-control" id="key" name="key" type="text" placeholder="ค้นหา..." onChange={this.onChangeData}/>

                </div>
               
                    
                    <div className="">
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
                        this.selectSeach(this.state.key2)
                        }   
                      </table>
                      </div>
            </div>
        )
    }
}
export default JobLists;
/**
 * 
 *  {
                        this.state.job.map(items =>(
                            <tbody className="col-12 col-sm-6 col-lg-4 mt-3 " key={items.id}>
                                <Job data={items}/>
                            </tbody>
                        ))
                    }
 */