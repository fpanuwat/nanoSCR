import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class Job extends Component{
    
    deleteOnClick = (e) =>{
       const id = this.props.data.job_number.toString();
        fetch('http://localhost:3001/api/delete/'+id, {
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
                <tr className={(this.props.data.status ? 'table-active': 'table-warning')}>
                    <td>{this.props.data.job_number}</td>
                    <td>{this.props.data.car_number}</td>
                    <td>{date1}</td>
                    <td>{date2}</td>
                     <td>{this.check(this.props.data.status)}</td>
                    <td><button 
                        className="btn btn-outline-danger btn-sm float-right ml-l"
                        onClick={e =>
                            window.confirm("ต้องการลบงานนี้หรือไม่?") && this.deleteOnClick(e)}
                        >delete</button>
                        <Link to={'/tdetail/'+this.props.data.job_number}>
                        <button className="btn btn-success btn-sm float-right">รายละเอียด</button>
                        </Link>
                    </td>
                
                </tr>
           
        );
    }
}
const mapDisPatchToProps = dispatch => {
    return {
        deleteStudentAtStore : (id) =>{
            return dispatch({type:'DEL_STUDENT',payload:id})
        }
    }
}

export default connect(null, mapDisPatchToProps)(Job);
//btn btn-outline-danger btn-sm float-right ml-l
//btn btn-outline-danger btn-sm float-right ml-l