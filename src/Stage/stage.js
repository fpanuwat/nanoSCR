import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Stage extends Component{
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
        return(
            <tr>
            <td>{this.props.data.job_number}</td>
            
            <td>{this.props.data.car_number}</td>
            <td>{date1}</td>
            <td>{date2}</td>
            <td>{this.check(this.props.data.status)}</td>
            <td>
                <Link to={'/upStage/'+this.props.data.job_number}>
                <button className="btn btn-success btn-sm float-right">อัพเดตงาน</button>
                </Link>
            </td>
        
        </tr>
           
        );
    }
}
export default Stage;
//btn btn-outline-danger btn-sm float-right ml-l
//btn btn-outline-danger btn-sm float-right ml-l