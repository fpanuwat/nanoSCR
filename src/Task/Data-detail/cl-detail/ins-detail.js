import React, { Component } from 'react';
class insdetail extends Component{
   
    render(){
        
        const daten3 = new Date(this.props.data.rep_date);
        const  date3 = daten3.toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        const daten4 = new Date(this.props.data.acc_date);
        const  date4 = daten4.toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        return(
            <tr>
            <td>{this.props.data.company}</td>
            <td>{this.props.data.sub_company}</td>
            <td>{this.props.data.ins_number}</td>
            <td>{this.props.data.ins_type}</td>
            <td>{this.props.data.claim_number}</td>
            <td>{this.props.data.limit_pay}</td>

            <td>{this.props.data.acc_number}</td>
        
            <td>{date3}</td>
        
            <td>{date4}</td>
        
            <td>{this.props.data.telephone}</td>
        
            <td>{this.props.data.fax}</td>
        </tr>
        )
    }
    
}
export default insdetail;
