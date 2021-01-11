import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../../JobFolder/Header-Job';
class endTaskList extends Component{
    state={
        job:[],
        key:'',
        key2:''
        
    }
    selectSeach = (e) =>{
        if(e===1||e==='1'){
            return this.state.job.filter(event =>  event.car_number.includes(this.state.key)).map(filteredResult => (
                            
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
                    </tbody>
                    ))
            
        }else{
         return   this.state.job.filter(event =>  event.job_number.includes(this.state.key)).map(filteredResult => (
                    
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
                </tbody>
                ))
            }
    }
    componentWillMount() {
        fetch('http://localhost:3001/api/loadClose')
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
    //event.job_number.includes(this.state.key)
    render(){
        const options = [
            {
                label: "-ค้นหาด้วย-",
                value: "0",
            },
            {
              label: "Job No.",
              value: "0",
            },
            {
              label: "ทะเบียนรถ",
              value: "1",
            }
        ];
        return(
        
            <div className="container-sm">
                <Header/>
                
                <div> 
                      <select onChange={this.onChangeData} name='key2'>
                        {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <input className="form-control" id="key" name="key" type="text" placeholder="ค้นหา..." onChange={this.onChangeData}/>

                </div>
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
                    {
                        this.selectSeach(this.state.key2)
                        /*
                        this.state.job.filter(event =>  event.job_number.includes(this.state.key)).map(filteredResult => (
                    
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
                        </tbody>
                        ))*/
                    }   
                </table>
            </div>
            
        )
    }
}
export default endTaskList;
/*
 {
                        this.state.job.map(items =>(
                            <tbody className="col-12 col-sm-6 col-lg-4 mt-3 " key={items.id}>
                                <Result data={items}/>
                            </tbody>
                        ))
                    }    


*/ 