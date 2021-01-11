import React, { Component } from 'react';
class jobdetail1 extends Component{
   
    render(){
        const daten1 = new Date(this.props.data.start_date);
        const  date1 = daten1.toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        const daten2 = new Date(this.props.data.end_date);
        const  date2 = daten2.toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        const daten3 = new Date(this.props.data.date_time);
        const  date3 = daten3.toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      

        return(
            <tr>
                                        
            <td>{date1}</td>
            <td>{date2}</td>
            <td>{this.props.data.rep_name}</td>
            <td>{this.props.data.re_name}</td>
            <td>{this.props.data.i_name}</td>
            <td>{this.props.data.i_tel}</td>
            <td>{this.props.data.damage}</td>
            <td>{this.props.data.n_color}</td>
            <td>{date3}</td>
        </tr>
        )
    }
    
}
export default jobdetail1;
