import React, { Component } from 'react';
import Header from '../JobFolder/Header-Job';

import ReactSession from '../ReactSession/ReactSession';

class OpenJobForm extends Component{
    state = {
        formElements:{
            e_mail: {
                type: 'email',
                value: '',
                validation: {
                    required: true,
                    pattern:'email'
                },
                touched: false,
                error: { status: true ,message: "กรุณนากรอกอีเมล"},
            },
            s_date: {
                type: 'date',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            e_date: {
                type: 'date',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            car_number: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            brand: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                   
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            serie: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            color: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            gear: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            model_number: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            insurance: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            c_name: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    pattern:'textThai'
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            address: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
           
            c_tel: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    pattern: 'telephone'
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            d_detail: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            damage: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            c_card_number: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    pattern: 'num'
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            car_type: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            kilo_numb: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    pattern: 'num'
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            id_customer: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    pattern: 'num'
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            acc_date: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            acc_number: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            insurance: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            sub_insurance: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    pattern:'textThai'
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            ins_tel: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    pattern: 'telephone'
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            ins_fax: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            ins_number: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            ins_type: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            claim_number: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            limit_amount: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
           
            report_date: { // time stamp
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            re_name: { // receive name
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    pattern:'textThai'
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            rep_name: { // report name
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    pattern:'textThai'
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            i_name: { // input by
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            i_tel:{
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    pattern: 'telephone'
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            n_color:{
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            emp_name: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    pattern:'textThai'
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            job_number: {
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    pattern:'job_number'
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            status:{
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    //on case
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            c_year:{
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    pattern: 'year'
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            report_name:{
                type: 'text',
                value: '',
                validation: {
                    required: true,
                    pattern:'textThai'
                },
                touched: false,
                error: { status: true ,message: "...on case..."},
            },
            
        },
        formValid: false,
        comp:[],
        haveOnstate: false,
        emp_name: '',
        emp_lname:'',
            
    }
    componentWillMount() {
        console.log(this.state.haveOnstate);
        const user = ReactSession.get("front");
         //const e = this.getCurrentCustomer(userId);
         fetch('http://localhost:3001/api/loadComp')
         .then((response) => response.json())
         .then(List => {
             this.setState({ comp: List
            });
             
         });
         fetch('http://localhost:3001/api/checkerMember/'+user)
         .then((response) => response.json())
         .then(List => {
             this.setState({ 
                 emp_name: List[0].emp_name,
                 emp_lname: List[0].emp_lname,
            });
             
         });
    }
    onChangeData =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        let updateForm =  {...this.state.formElements};
        console.log(updateForm);
        updateForm[name].value = value;
        updateForm[name].touched = value;
        const validObj = this.checkValid(value,updateForm[name].validation);
        updateForm[name].error = {
            status: validObj.status,
            message: validObj.message
        }
        let formStatus = true;
        for(let name in updateForm){
            if(updateForm[name].validation.required === true){
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
        if(rule.pattern === 'telephone' && valid){
            if(/[0-9]{10}/.test(value) === false){
                valid = false;
                message = 'กรุณากรอกตัวเลข 10 หลัก';
            }
        }
        if(rule.pattern === 'year' && valid){
            if(/[0-9]{4}/.test(value) === false){
                valid = false;
                message = 'กรุณากรอกตัวเลข 4 หลัก';
            }
        }
        if(rule.pattern === 'num' && valid){
            if(/[0-9]/.test(value) === false){
                valid = false;
                message = 'กรุณากรอกเฉพาะตัวเลข';
            }
        }
        if(rule.pattern === 'textThai' && valid){
            if(/^[ก-๏\s]+$/.test(value) === false){
                valid = false;
                message = 'กรุณากรอกเฉพาะภาษาไทย';
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
    
    onSubmitStudentForm =(e) =>{
        e.preventDefault();
        if(this.state.job_number === ''||this.state.car_number === ''||
            this.state.c_name === '' ||this.state.c_tel === ''||
            this.state.brand === '' || this.state.car_type === ''||
            this.state.c_year === ''|| this.state.claim_number ===''||
            this.state.model_number === '' || this.state.serie === ''||
            this.state.kilo_numb === ''|| this.state.n_color=== ''||
            this.state.d_detail === ''|| this.state.insurance === ''||
            this.state.sub_insurance === ''|| this.state.ins_type === ''||
            this.state.ins_tel === ''|| this.state.ins_number === ''||
            this.state.limit_amount ===''|| this.state.re_name ===''||
            this.state.rep_name===''|| this.state.report_name === ''||
            this.state.i_name === ''
        ){
            alert("กรอกข้อมูลไม่ครบ");
            
            console.log("id");
        }else{
            fetch('http://localhost:3001/api/getJobDe/'+this.state.job_number)
            .then((response) => response.json())
            .then(List => {
                
                if(List.length >0){
                    console.log(List);
                    alert("มี Job Number นี้แล้ว"); 
                }else{
                    
                        const requestOptions = {
                            method: 'POST',
                            headers: { 
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer my-token',
                                'My-Custom-Header': 'foobar'
                            },
                            body: JSON.stringify({
                                s_date: this.state.formElements['s_date'].value,
                                e_date: this.state.formElements['e_date'].value,
                                car_number: this.state.formElements['car_number'].value,
                                brand: this.state.formElements['brand'].value,
                                serie: this.state.formElements['serie'].value,
                                color: this.state.formElements['color'].value,
                                c_year: this.state.formElements['c_year'].value,
                                gear: this.state.formElements['gear'].valuer,
                                model_number: this.state.formElements['model_number'].value,
                                insurance: this.state.formElements['insurance'].value,
                                c_name: this.state.formElements['c_name'].value,
                                address: this.state.formElements['address'].value,
                                e_mail: this.state.formElements['e_mail'].value,
                                c_tel: this.state.formElements['c_tel'].value,
                                d_detail: this.state.formElements['d_detail'].value,
                                damage: this.state.formElements['damage'].value,
                                c_card_number: this.state.formElements['c_card_number'].value,
                                car_type: this.state.formElements['car_type'].value,
                                kilo_numb: this.state.formElements['kilo_numb'].value ,
                                id_customer: this.state.formElements['id_customer'].value ,
                                acc_date: this.state.formElements['acc_dat'].value ,
                                acc_number: this.state.formElements['acc_number'].value ,
                                insurance: this.state.formElements['insurance'].value ,
                                sub_insurance: this.state.formElements['sub_insurance'].value ,
                                ins_tel: this.state.formElements['ins_tel'].value ,
                                ins_fax: this.state.formElements['ins_fax'].value ,
                                ins_number: this.state.formElements['ins_number'].value ,
                                ins_type: this.state.formElements['ins_type'].value ,
                                claim_number: this.state.formElements['claim_number'].value ,
                                limit_amount: this.state.formElements['limit_amount'].value ,
                                ins_fax: this.state.formElements['ins_fax'].value ,
                                report_date: this.state.formElements['report_date'].value ,
                                re_name: this.state.formElements['re_name'].value ,
                                rep_name: this.state.formElements['report_name'].value ,
                                i_name: this.state.formElements['i_name'].value ,
                                i_tel: this.state.formElements['i_tel'].value ,
                                n_color: this.state.formElements['n_color'].value ,
                                get_job: this.state.formElements['get_job'].value ,
                                status: this.state.formElements['status'].value ,
                                job_number: this.state.formElements['job_number'].value ,
                                date_time: this.state.formElements['date_time'].value ,
                                haveOnstate: this.state.haveOnstate
                            })
                    
                        
                        };
                        alert("created!!");
                         /*   fetch('http://localhost:3001/api/createJob', requestOptions)
                                .then(response => response.json())
                        this.props.history.push('/loadJob'); */
                    } 
            });
         } 
           
 

    }
    checkerCar =()=>{
        fetch('http://localhost:3001/api/chCar/'+this.state.formElements['car_number'].value)
        .then((response) => response.json())
        .then(List =>{
            if(List.length>0){
                this.setState.formElements(
                   {
                       car_number:{value : List[0].car_number},
                    car_type:{value :  List[0].type },
                    brand:{value :  List[0].brand},
                    serie:{value :  List[0].serie},
                    c_year:{value :  List[0].year},
                    gear:{value :  List[0].gear},
                    model_number:{value :  List[0].model_number},
                    kilo_numb:{value :  List[0].kilo_number},
                    color:{value :  List[0].color},
                    
                })
                this.setState({haveOnstate: true})
                fetch('http://localhost:3001/api/chCust/'+this.state.car_number)
                .then((response) => response.json())
                .then(List1 =>{
                    this.setState({
                        c_name: List1[0].c_name,
                        id_customer: List1[0].c_id, 
                        address: List1[0].address,
                        c_tel: List1[0].telephone,
                        c_card_number: List1[0].drive_id,
                        e_mail: List1[0].email,
                    })
                })
                fetch('http://localhost:3001/api/chIns/'+this.state.car_number)
                .then((response) => response.json())
                .then(List2 =>{
                    this.setState({
                        insurance: List2[0].company,
                        sub_insurance: List2[0].sub_company, 
                        ins_tel: List2[0].telephone,
                        ins_fax: List2[0].fax,
                        claim_number: List2[0].claim_number,
                        limit_amount: List2[0].limit_pay,
                        ins_type: List2[0].ins_type,
                        ins_number: List2[0].ins_number
                    })
                })
                console.log(this.state.haveOnstate);
            }else{
                this.setState({haveOnstate: false});
                console.log(this.state.haveOnstate);
                    alert(this.state.car_number+" ยังไม่มีในระบบ");
            }
            
        })
    }
    render(){
        const date = new Date();
        const result = date.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          let list = this.state.comp.map(items => (
            <option value={this.state.com_name}>{items.com_name}</option>
          
        ));

        return(
            <form>
                <div className="container">
                    <Header/>  
                    <div className="container">
                        <div className="row">Testing Validation From/OpenJob</div>
                                
                        <div class="btn">
                            <button className="btn btn-sm btn-primary ml-1 "
                                onClick = { e=>
                                window.confirm("ต้องการสร้างงานนี้หรือไม่?") && this.onSubmitStudentForm(e)}
                                disabled={!this.state.formValid}
                            >สร้างงาน</button>
                        </div>
                       </div>    
                    <div className="row">
                                <input type="hidden" name="date_time" value={result}/>
                        <div className="col mx-auto"> 
                        <div className="card">
                                <div className="card-body">
                                    <label><h5>รายละเอียดรถ</h5></label>
                                    <div className="float-right">
                                        <button className="btn btn-info" onClick={this.checkerCar}>ตรวจสอบ</button>
                                    </div>
                                    <div className="form-group">
                                        <label>ทะเบียนรถ*</label>
                                            <input 
                                                type="text"
                                                name="car_number"
                                                id= 'car_number'
                                                className={this.getInputClass('car_number')}
                                                placeholder="กข-1234 / 1กข-4321"
                                                value={this.state.formElements['car_number'].value}
                                                onChange={this.onChangeData}
                                              
                                            />
                                            <div className="invalid-feedback">{this.getErrorMessage('car_number')}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>ประเภทรถ*</label>
                                            <select name="car_type" 
                                                className={this.getInputClass('car_type')}
                                                onChange={this.onChangeData}
                                                
                                                >
                                                <option value={this.state.formElements['car_type'].value}>{this.state.formElements['car_type'].value}</option>
                                                <option value="รถยนต์นั่ง">รถยนต์นั่ง</option>
                                                <option value="รถอเนกประสงค์">รถยนต์อเนกประสงค์</option>
                                                <option value="รถกระบะ">รถกระบะ</option>
                                            </select>
                                            <div className="invalid-feedback">{this.getErrorMessage('car_type')}</div>

                                        </div>
                                        <div className="form-group">
                                            <label>ยี่ห้อ*</label>
                                            <input 
                                                type="text"
                                                name="brand"
                                                className={this.getInputClass('brand')}
                                                value={this.state.formElements['brand'].value}
                                                onChange={this.onChangeData}  
                                            /><div className="invalid-feedback">{this.getErrorMessage('brand')}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>รุ่นรถ*</label>
                                            <input 
                                                type="text"
                                                name="serie"
                                                className={this.getInputClass('serie')}
                                                value={this.state.formElements['serie'].value}
                                                onChange={this.onChangeData}
                                               
                                            /><div className="invalid-feedback">{this.getErrorMessage('serie')}</div>
                                        </div>
                                        <div className="form-group">
                                <label>ปี</label>
                                <input 
                                    type="text"
                                    name="c_year"
                                    className={this.getInputClass('c_year')}
                                    value={this.state.formElements['c_year'].value}
                                    onChange={this.onChangeData}
                                  
                                /><div className="invalid-feedback">{this.getErrorMessage('c_year')}</div>
                            </div>
                            <div className="form-group">
                                <label>เกียร์</label>
                                <select name="gear" 
                                    className={this.getInputClass('gear')}
                                    onChange={this.onChangeData}
                                   
                                    >
                                    <option value={this.state.formElements['gear'].value}>{this.state.formElements['gear'].value}</option>
                                    <option value="Manual" >Manual</option>
                                    <option value="Auto">Auto</option>
                                </select>
                                <div className="invalid-feedback">{this.getErrorMessage('gear')}</div>
                            </div>
                                        <div className="form-group">
                                            <label>หมายเลขตัวถัง *</label>
                                            <input 
                                                type="text"
                                                name="model_number"
                                                className={this.getInputClass('model_number')}
                                                value={this.state.formElements['model_number'].value}
                                                onChange={this.onChangeData}
                                            /><div className="invalid-feedback">{this.getErrorMessage('model_number')}</div>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>หมายเลขกิโล</label>
                                            <input 
                                                type="text"
                                                name="kilo_numb"
                                                className={this.getInputClass('kilo_numb')}
                                                value={this.state.formElements['kilo_numb'].value}
                                                onChange={this.onChangeData}
                                            /><div className="invalid-feedback">{this.getErrorMessage('kilo_numb')}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>ระดับความเสียหาย</label>
                                            <select name="damage" 
                                                className={this.getInputClass('damage')}
                                                onChange={this.onChangeData}
                                                
                                                >
                                                <option value=""></option>     
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                                <option value="H1">H1</option>
                                                <option value="H2">H2</option>
                                                <option value="H3">H3</option>
                                                <option value="H4">H4</option>
                                            </select>
                                            <div className="invalid-feedback">{this.getErrorMessage('damage')}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>สีรถ</label>
                                            <input 
                                                type="text"
                                                name="color"
                                                className={this.getInputClass('color')}
                                                value={this.state.formElements['color'].value}
                                                onChange={this.onChangeData}
                                               
                                            /><div className="invalid-feedback">{this.getErrorMessage('color')}</div>
                                        </div>
                                    
                                        <div className="form-group">
                                            <label>สีที่พ่น *</label>
                                            <input 
                                                type="text"
                                                name="n_color"
                                                value={this.state.formElements['n_color'].value}
                                                className={this.getInputClass('n_color')}
                                                onChange={this.onChangeData}
                                               
                                            /><div className="invalid-feedback">{this.getErrorMessage('n_color')}</div>
                                        </div>

                                        <div className="form-group">
                                            <label>รายละเอียด/รายการซ่อม**</label>
                                            <input 
                                                type="text"
                                                name="d_detail"
                                                className={this.getInputClass('d_detail')}
                                                onChange={this.onChangeData}
                                            
                                            /><div className="invalid-feedback">{this.getErrorMessage('d_detail')}</div>
                                        </div>
                                    </div>
                                </div>
                           <div className="card">
                                <div className="card-body">
                                <h5>ข้อมูลลูกค้า*</h5>
                                <div className="form-group">
                                        <label>เลขบัตรประจำตัวประชาชน</label>
                                        <input 
                                            type="text"
                                            name="id_customer"
                                            className={this.getInputClass('id_customer')}
                                            value={this.state.formElements['id_customer'].valuer}
                                            onChange={this.onChangeData}
                                            
                                        /><div className="invalid-feedback">{this.getErrorMessage('id_customer')}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>ชื่อลูกค้า</label>
                                        <input 
                                            type="text"
                                            name="c_name"
                                            className={this.getInputClass('c_name')}
                                            value={this.state.formElements['c_name'].value}
                                            onChange={this.onChangeData}
                                            
                                        /><div className="invalid-feedback">{this.getErrorMessage('c_name')}</div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>เลขบัตรใบขับขี่</label>
                                        <input 
                                            type="text"
                                            name="c_card_number"
                                            className={this.getInputClass('c_card_number')}
                                            value={this.state.formElements['c_card_number'].value}
                                            onChange={this.onChangeData}
                                        />
                                        <div className="invalid-feedback">{this.getErrorMessage('c_card_number')}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>ที่อยู่</label>
                                        <input 
                                            type="text"
                                            name="address"
                                            className={this.getInputClass('address')}
                                            value={this.state.formElements['address'].value}
                                            onChange={this.onChangeData}
                                            
                                        /><div className="invalid-feedback">{this.getErrorMessage('address')}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>เบอร์โทรศัพท์</label>
                                        <input 
                                            type="text"
                                            name="c_tel"
                                            className={this.getInputClass('c_tel')}
                                            value={this.state.formElements['c_tel'].value}
                                            onChange={this.onChangeData}
                                           
                                        /><div className="invalid-feedback">{this.getErrorMessage('c_tel')}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>E-mail</label>
                                        <input 
                                            type="email"
                                            name="e_mail"
                                            value={this.state.formElements['e_mail'].value}
                                            className={this.getInputClass('e_mail')}
                                            onChange={this.onChangeData}
                                            
                                        /><div className="invalid-feedback">{this.getErrorMessage('e_mail')}</div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>  
                        
                        <div className="col mx-auto"> 
                            <div className="card">
                                <div className="card-body">
                                    <h5>รายละเอียดประกัน</h5>
                                    <div className="form-group">
                                        <label>บริษัทประกัน</label>
                                        <select
                                            name="insurance"
                                            className={this.getInputClass('insurance')}
                                            onChange={this.onChangeData}
                                        >
                                            <option value={this.state.formElements['insurance'].value}>{this.state.formElements['insurance'].value}</option>
                                            {list}
                                        </select><div className="invalid-feedback">{this.getErrorMessage('insurance')}</div>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label>สาขา</label>
                                        <input 
                                            type="text"
                                            name="sub_insurance"
                                            className={this.getInputClass('sub_insurance')}
                                            value={this.state.formElements['sub_insurance'].value}
                                            onChange={this.onChangeData}
                                            
                                        /><div className="invalid-feedback">{this.getErrorMessage('sub_insurance')}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>เบอร์โทรศัพท์</label>
                                        <input 
                                            type="text"
                                            name="ins_tel"
                                            className={this.getInputClass('ins_tel')}
                                            value={this.state.formElements['ins_tel'].value}
                                            onChange={this.onChangeData}
                                            pattern="[0-9]" title="กรุณากรอกเฉพาะตัวเลข "
                                            
                                        /><div className="invalid-feedback">{this.getErrorMessage('ins_tel')}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>เบอร์แฟกซ์</label>
                                        <input 
                                            type="text"
                                            name="ins_fax"
                                            className={this.getInputClass('ins_fax')}
                                            value={this.state.formElements['ins_fax'].value}
                                            onChange={this.onChangeData}
                                            
                                        /><div className="invalid-feedback">{this.getErrorMessage('ins_fax')}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>หมายเลขกรมธรรม์</label>
                                        <input 
                                            type="text"
                                            name="ins_number"
                                            className={this.getInputClass('ins_number')}
                                            value={this.state.formElements['ins_number'].value}
                                            onChange={this.onChangeData}


                                           
                                        /><div className="invalid-feedback">{this.getErrorMessage('ins_number')}</div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>ประเภทกรมธรรม์</label>
                                        <select name="ins_type" 
                                                className={this.getInputClass('ins_type')}
                                                onChange={this.onChangeData}
                                                 required
                                                >
                                                <option value={this.state.formElements['ins_type'].value}>{this.state.formElements['ins_type'].value}</option>
                                                <option value="ประเภท 1">ประเภท 1</option>
                                                <option value="ประเภท 2">ประเภท 2</option>
                                                <option value="ประเภท 3">ประเภท 3</option>
                                                <option value="ประเภท 4">ประเภท 4</option>
                                                <option value="ประเภท 5">ประเภท 5</option>
                                            </select>
                                            <div className="invalid-feedback">{this.getErrorMessage('ins_type')}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>เลขที่เคลม</label>
                                        <input 
                                            type="text"
                                            name="claim_number"
                                            className={this.getInputClass('claim_number')}
                                            value={this.state.formElements['claim_number'].value}
                                            onChange={this.onChangeData}
                                           
                                        /><div className="invalid-feedback">{this.getErrorMessage('claim_number')}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>วงเงินคุ้มครอง</label>
                                        <input 
                                            type="text"
                                            name="limit_amount"
                                            className={this.getInputClass('limit_amount')}
                                            value={this.state.formElements['limit_amount'].value}
                                            onChange={this.onChangeData}
                                            pattern="[0-9]" title="กรุณากรอกเฉพาะตัวเลข "
                                           
                                        /><div className="invalid-feedback">{this.getErrorMessage('limit_amount')}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>เลขที่แจ้งอุบัติเหตุ</label>
                                        <input 
                                            type="text"
                                            name="acc_number"
                                            className={this.getInputClass('acc_number')}
                                            value={this.state.formElements['acc_number'].value}
                                            onChange={this.onChangeData}
                                           
                                        /><div className="invalid-feedback">{this.getErrorMessage('acc_number')}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>วันที่แจ้งอุบัติเหตุ</label>
                                        <input 
                                            type="date"
                                            name="report_date"
                                            className={this.getInputClass('report_date')}
                                            value={this.state.formElements['report_date'].value}
                                            onChange={this.onChangeData}
                                        
                                        /><div className="invalid-feedback">{this.getErrorMessage('report_date')}</div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>วันที่เกิดอุบัติเหตุ</label>
                                        <input 
                                            type="date"
                                            name="acc_date"
                                            className={this.getInputClass('acc_date')}
                                            value={this.state.formElements['acc_date'].value}
                                            onChange={this.onChangeData}
                                          
                                        /><div className="invalid-feedback">{this.getErrorMessage('acc_date')}</div>
                                    </div>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5>การรับส่งรถ</h5> 
                                <div className="form-group">
                                    <label>วันที่เข้าซ่อม</label>
                                    <input 
                                        type="date"
                                        name="s_date"
                                        className={this.getInputClass('s_date')}
                                        value={this.state.formElements['s_date'].value}
                                        onChange={this.onChangeData}
                                      
                                    /><div className="invalid-feedback">{this.getErrorMessage('s_date')}</div>
                                </div>
                                <div className="form-group">
                                    <label>วันที่นัดรับ</label>
                                    <input 
                                        type="date"
                                        name="e_date"
                                        className={this.getInputClass('e_date')}
                                        value={this.state.formElements['e_date'].value}
                                        onChange={this.onChangeData}
                                        
                                    />
                                    <div className="invalid-feedback">{this.getErrorMessage('e_date')}</div>
                                </div>
                                <div className="form-group">
                                    <label>ผู้รับรายงาน</label>
                                    <input 
                                        type="text"
                                        name="report_name"
                                        className={this.getInputClass('report_name')}
                                        value={this.state.emp_name +" "+this.state.emp_lname}
                                        onChange={this.onChangeData}
                                       disabled
                                    /><div className="invalid-feedback">{this.getErrorMessage('report_name')}</div>
                                </div>
                                <div className="form-group">
                                    <label>ผู้รับรถเข้าซ่อม</label>
                                    <input 
                                        type="text"
                                        name="re_name"
                                        className={this.getInputClass('re_name')}
                                        value={this.state.formElements['re_name'].value}
                                        onChange={this.onChangeData}
                                       
                                    /><div className="invalid-feedback">{this.getErrorMessage('re_name')}</div>
                                </div>
                                
                                <div className="form-group">
                                    <label>ผู้นำรถเข้าซ่อม</label>
                                    <select name="i_name"
                                        className={this.getInputClass('i_name')}
                                        onChange={this.onChangeData}>
                                        <option value={this.state.formElements['i_name'].value}>{this.state.formElements['i_name'].value}</option>
                                        <option value="ประกัน">ประกัน</option>
                                        <option value="ลูกค้้า">ลูกค้า</option>
                                    </select>
                                    <div className="invalid-feedback">{this.getErrorMessage('i_name')}</div>
                                </div>
                                
                                <div className="form-group">
                                    <label>เบอร์ติดต่อ</label>
                                    <input 
                                        type="text"
                                        name="i_tel"
                                        className={this.getInputClass('i_tel')}
                                        value={this.state.formElements['i_tel'].value}
                                        onChange={this.onChangeData}
                                        pattern="[0-9]" title="กรุณากรอกเฉพาะตัวเลข "
                                        
                                    /><div className="invalid-feedback">{this.getErrorMessage('i_tel')}</div>
                                </div>
                                <div className="form-group">
                                    <label>Job No:</label>
                                    <input 
                                        type="text"
                                        name="job_number"
                                        className={this.getInputClass('job_number')}
                                        placeholder="xxx-xxxx"
                                        
                                        value={this.state.formElements['job_number'].value}
                                        onChange={this.onChangeData}
                                      
                                    />
                                    <div className="invalid-feedback">{this.getErrorMessage('job_number')}</div>
                                </div>
                                <div className="form-group">
                                    <label>วันที่อู่ออกรายงาน</label>
                                    <input 
                                        type="text"
                                        name="report_date"
                                        className={this.getInputClass('report_date')}
                                        value={result}
                                        onChange={this.onChangeData}
                                        disabled
                                    />
                                   
                                </div>
                            </div>
                        </div>
                       
                    </div>
                
                </div>  
            </form>
        )
    }
    
}
export default OpenJobForm;
