import React, { Component } from 'react';
import Student from './Student';
import {connect} from 'react-redux';
import * as action from '../Action/action';

class StudentList extends Component{
    

    render(){
        const AllStudents = this.props.studentsFromStore;
        let list = (
            <div className="col-12 mx-auto">
                <div className="alert-info text-center pt-5 pb-5">ไม่พบนักศึกษา</div>
            </div>
        );
        if(AllStudents.length !== 0){
            list = AllStudents.map(items => (
                <div className="col-12 col-sm-6 col-lg-4 mt-3" key={items.id}>
                    <Student data={items}/>
                </div>
            ));
        }
        for(let i = 0; i<AllStudents.length; i++){
            console.log(AllStudents[i].username);
            if(AllStudents[i].username === "admin"){
                console.log("xxxxxxxxxxxx");
            }
        }

        
        return(
           
            <div className="row">
               {list}
            </div>
        )
    }
    componentDidMount(){
        this.props.getAllStudents();
    }
}


const mapStateToProps = state => {
    return{
        studentsFromStore : state.member
    }
   
}
const mapDispatchToProps = dispatch => {
    return {
        getAllStudents : () => {
            return dispatch(action.getLists());
        }
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(StudentList); 
/*<div>
<ul>
{this.state.student.map((i) => (
    <li key={i.name}>{i.score}</li>
))}
</ul>
</div>*/