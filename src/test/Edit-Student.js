import React, { Component } from 'react';
import {connect} from 'react-redux';

class EditStudent extends Component{
    state = {
        id:'',
        name: '',
        score:''
    }
    onChangeData = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    componentWillMount() {
        const userId =this.props.match.params.id;
        const student = this.getCurrentStudent(userId);
        if(student){
            this.setState({
                id: student.id,
                name: student.name,
                score: student.score
            })
            console.log(userId);
            console.log(student);
        }else{
            this.props.history.push('/');
            
        } 
    }
    getCurrentStudent(id){
        const allStudent = this.props.studentsFromStore;
        const [student] =allStudent.filter((i) =>{
            return i.id.toString() === id.toString();
        });
        return student;
    }
    onSubmitStudentForm =(data,e) =>{
        e.preventDefault();
        const newData ={
            id: data.id,
            name: data.name,
            score: data.score
        }
        this.props.editStudentAtStore(newData);
        this.props.history.push('/');

    }
    render(){
        return(
            <div className="row mt-3 mb-5 ml-5 mr-5">
                <div className="card col-12 col-sm-8 col-lg-6 mx-auto"> 
                    <div className="card-body">
                        <form onSubmit={this.onSubmitStudentForm.bind(this,this.state)}>
                        <div className="form-group">
                            <label>Name </label>
                            <input 
                                type="text"
                                name="name"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>Score </label>
                            <input 
                                type="text"
                                name="score"
                                className="form-control"
                                value={this.state.score}
                                onChange={this.onChangeData}
                            />
                        </div>
                        <div className="form-group text-center pt-3">
                            <button className="btn btn-outline-success btn-sm mr-1"
                            onClick={ ()=> this.props.history.push('/')}>Cancle</button>
                            <button className="btn btn-sm btn-primary ml-1 "
                                type="submit"
                            >edit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}
const mapStateToProps = state => {
    return {
        studentsFromStore : state.students
    }
}
const mapDispatchToProps = dispatch => {
    return {
        editStudentAtStore : (id) => {
            return dispatch({ type : 'EDIT_STUDENT', payload : id })
        }
    }       
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);