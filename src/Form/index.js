import React, { useState } from 'react';
import axios from 'axios';
import { Component } from 'react';
//disabled={!this.state.formValid}
class RegisterForm extends Component{
    state ={
       formElements:{
            username:{
                type:'text',
                value:'',
                validator:{
                    required: true,
                    minLength:5,
                    maxLength:15
                },
                touched: false,
                error: {status: true , message: 'มีผู้ใช้แล้ว'}
            }, 
            password:{
                type:'password',
                value:'',
                validator:{
                    required: true,
                    minLength:8,
                    maxLength:20
                },
                touched: false,
                error: {status: true , message: 'รหัสไม่ถูกต้อง'}
            },
            email:{
                type:'email',
                value:'',
                validator:{
                    required: true,
                    pattern:'email'
                },
                touched: false,
                error: {status: true , message: 'กรุณนากรอกอีเมล'}
            },
        },
        formValid: true
    }

    onFormChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        let updateForm =  {...this.state.formElements};
        console.log(updateForm);
        updateForm[name].value = value;
        updateForm[name].touched = value;
        const validObj = this.checkValid(value,updateForm[name].validator);
        updateForm[name].error = {
            status: validObj.status,
            message: validObj.message
        }
        let formStatus = true;
        for(let name in updateForm){
            if(updateForm[name].validator.required === true){
                formStatus = !updateForm[name].error.status && formStatus;
            }
        }
        this.setState({
            ...this.state,
            formElements: updateForm,
            formValid: formStatus
        })
        console.log(this.state);
    }
    checkValid = (value,rule) =>{
        let valid = true;
        let message = '';
        console.log("rule.required :" +rule.required);
        if(rule.required){
            //if true when length === 0
            //trim() ตัดspace bar 
            if(value.trim().length === 0){
                valid = false;
                message = 'ต้องกรอก';
            }
        }
       
        if(value.length < rule.minLength && valid){
            valid = false;
            message = 'น้อยกว่า '+rule.minLength+' ตัวอักษร';

        }
        if(value.length > rule.maxLength && valid){
            valid = false;
            message = 'มากกว่า '+rule.maxLength+' ตัวอักษร';
            
        }
        if(rule.pattern === 'email' && valid){
            if(/^[^s@]+@[^\s@]+\.[^\s@]+$/.test(value) === false){
                valid = false;
                message = 'กรอกอีเมลไม่ถูกต้อง';
            }
        }
        return {status: !valid, message:message};
    }
    getErrorMessage = (name) =>{
        return this.state.formElements[name].error.message;
    }
    getInputClass = (name) =>{
        const elementErrStatus = this.state.formElements[name].error.status;
        return elementErrStatus && this.state.formElements[name].touched ? 'form-control is-invalid':'form-control';
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        const formData = {};
        for (let name in this.state.formElements){
            formData[name] =this.state.formElements[name].value;
        }
        for (let name in this.state.formElements){
            console.log("formData["+name+"] :"+formData[name]);
        }
        
    }
   
    render(){
        //<form onSubmit={this.onFormSubmit}>
        return(
            <div className="row">
            <div className="col-sm-3 mt-5"></div>
            <div className="col-sm-6 mt-5 card">
                <div className="card-body header">สมัครสมาชิก
                <div className="card-body ml-3 mr-3 mt-5 mb-1">
                <form>
               
                      
                    
                    <div className="form-group">
                        <label htmlFor="username">username</label>
                        <input 
                            type="text" 
                            className={this.getInputClass('username')}
                            id="username" 
                            name="username" 
                            onChange={this.onFormChange}
                            />   <div className="invalid-feedback">{this.getErrorMessage('username')}</div>
                    </div>  

                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input 
                            type="password" 
                            className={this.getInputClass('password')} 
                            id="password" name="password" 
                            onChange={this.onFormChange}
                            />     <div className="invalid-feedback">{this.getErrorMessage('password')}</div>
                    </div>
                   <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input 
                            type="email" 
                            className={this.getInputClass('password')} 
                            id="email" name="email" 
                            onChange={this.onFormChange}
                            />     <div className="invalid-feedback">{this.getErrorMessage('email')}</div>
                    </div>
                  

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary my-1" onClick={this.onFormSubmit} >submit</button>
                    </div>

                </form>
                </div>
            </div>
            </div>
            <div className="col-sm-3 mt-5"></div>
        </div>
        );

}
}
export default RegisterForm;
