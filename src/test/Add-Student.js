import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddStudent extends Component{
    state = {
        name: '',score:''
    }
    onChangeData = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmitStudentForm =(data,e) =>{
        e.preventDefault();
        const newData ={
            id: new Date().getTime().toString(),
            name: data.name,
            score: data.score
        }
        this.props.addStudentAtScore(newData);
        this.props.history.push('/');

    }
    render(){
        return(
            <div className="row mt-3 mb-5 ml-5 mr-5">
                <div className="card col-12 col-sm-8 col-lg-6 mx-auto"> 
                    <div className="card-body">
                        <form onSubmit={this.onSubmitStudentForm.bind(this,this.state)}>
                        <div className="block-4 text-center">
                        <h3>Add Work</h3>
                        </div>
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
                            <button className="btn btn-outline-danger btn-sm mr-1"
                            onClick={ ()=> this.props.history.push('/')}>Cancle</button>
                            <button className="btn btn-sm btn-primary ml-1 "
                                type="submit"
                            >Add</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}
const mapDispatchToProps = dispatch => {
    return {
        addStudentAtScore : (newStudentData) => {
            return dispatch({ type : 'ADD_STUDENT', payload : newStudentData })
        }
    }       
}
export default connect(null, mapDispatchToProps)(AddStudent);
//btn btn-outline-danger btn-sm float-right ml-l red_outline
//btn btn-outline-success btn-sm mr-1 green_outline

/*
 <img className="img img-thumbnail mt-5 ml-3"
                                scr="https://lorempixel.com/150/150/sports/"
                                alt="Logo"
                            />
 */