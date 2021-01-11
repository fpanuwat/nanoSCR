import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class list1 extends Component{
    render(){
        return(
                <tr>
                    <td>{this.props.data.std_id}</td>
                    <td>{this.props.data.std_name}</td>
                    <td>{this.props.data.std_score}</td>
                   
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

export default connect(null, mapDisPatchToProps)(list1);
//btn btn-outline-danger btn-sm float-right ml-l
//btn btn-outline-danger btn-sm float-right ml-l