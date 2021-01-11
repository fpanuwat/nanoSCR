import React, { Component } from 'react';
//import Header from '../header-task';
//import Jobxx from './re-detail';
import {Link} from 'react-router-dom';

class reDetail extends Component{
    state={
      date_time:''
    }
    
 
    deleteOnClick = (e) =>{
        const id = this.props.data.job_number.toString();
        fetch('http://localhost:3001/api/delete/'+id, {
            method: 'DELETE'
        }).then(res => res.text())
        .then(res => console.log(res)); 
        window.location.reload();
      }  

     componentDidMount(){
        const id = this.props.data.job_number.toString();
        fetch('http://localhost:3001/api/chStage/'+id)
        .then((response) =>response.json())
        .then(List =>{
          this.setState({
              date_time: List[0].date_time
          })
        })
     }
    
    render(){
        const dates = new Date(this.props.data.start_date);
        const  date1 = dates.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          const datee = new Date(this.props.data.end_date);
          const  date2 = datee.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          const datec = new Date(this.state.date_time);
          const  date3 = datec.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        return(
                <tr>
                    <td>{this.props.data.job_number}</td>
                    <td>{this.props.data.car_number}</td>
                    <td>{date1}</td>
                    <td>{date2}</td>
                    <td>{date3}</td>
                    <td>
                        <Link to={'/closeJ/'+this.props.data.job_number}>
                        <button className="btn btn-success btn-sm float-right">รายละเอียด</button>
                        </Link>
                    </td>
                
                </tr>
           
        );
    }
}

export default reDetail;