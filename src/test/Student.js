import React,{Component} from 'react';
import {connect} from 'react-redux';
class Student extends Component{
    
    render(){
       
       
       
        return(
            <div className="card">
                <div className="card-header">
                    name: {this.props.data.emp_name}
                
                    
                </div>
                <div className="card-body">
                    score: {this.props.data.username}
                </div>
            </div>    
        );
    }

}


export default connect(null, null)(Student);
//btn btn-outline-danger btn-sm float-right ml-l
//btn btn-outline-danger btn-sm float-right ml-l