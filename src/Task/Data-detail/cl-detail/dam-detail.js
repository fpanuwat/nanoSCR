import React, { Component } from 'react';
class damdetail extends Component{
   
    minutes = (e) =>{
        if(e.toString().length === 1 || e.toString().length === '1'){
            return 0+e.toString();
        }else{
            return e;
        }
    }
    render(){
        const date = new Date(this.props.data.date_time);
        const  dateC = date.toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        
        return(
            <tr>
                <td>{this.props.data.detail}</td>
                <td>{this.props.data.comment}</td>
                
                <td>{this.props.data.emp_name}</td>
                <td>{dateC}</td>
                <td>{date.getHours()}:{this.minutes(date.getMinutes())}</td>
            </tr>
          
        )
    }
    
}
export default damdetail;
