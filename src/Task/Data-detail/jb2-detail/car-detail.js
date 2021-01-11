import React, { Component } from 'react';
class cardetail1 extends Component{
   
    render(){
        
        return(
           
            <tr>
                <td>{this.props.data.car_number}</td>
                <td>{this.props.data.type}</td>
                <td>{this.props.data.brand}</td>
                <td>{this.props.data.serie}</td>
                <td>{this.props.data.model_number}</td>
                <td>{this.props.data.kilo_number}</td>
                <td>{this.props.data.color}</td>

            </tr>
        
     
        )
    }
    
}
export default cardetail1;
