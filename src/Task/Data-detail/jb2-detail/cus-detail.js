import React, { Component } from 'react';
class cusdetail extends Component{
   
    render(){
        

        return(
           <tr>
                <td>{this.props.data.c_name}</td>
                <td>{this.props.data.c_id}</td>
                <td>{this.props.data.drive_id}</td>
                <td>{this.props.data.address}</td>
                <td>{this.props.data.telephone}</td>
            </tr>
        )
    }
    
}
export default cusdetail;
