import React,{Component} from 'react';
class Job extends Component{
    
    
     
    
    render(){
        /* const date5 = new Date(this.props.data.date_time);
        const  date5 = dates.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
       */
        return(
            <div>
            <td>{this.props.data.detail}</td>
            <td>{this.props.data.emp_name}</td>
            <td>{date5}</td>
          </div>
               
           
        );
    }
}


export default Job;