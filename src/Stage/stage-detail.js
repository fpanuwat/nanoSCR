import React,{Component} from 'react';

//import ReactSession from '../ReactSession/ReactSession';
class Stage extends Component{
    state={
        count:''
    }    
    minutes = (e) =>{
        if(e.toString().length === 1 || e.toString().length === '1'){
            return 0+e.toString();
        }else{
            return e;
}
    }
    counter =(e)=>{
        console.log("length: "+e);
        
        console.log("length 1: "+((e+2)%e));
    }
    
    render(){
        const date = new Date(this.props.data.date_time);
        const  dateNow = date.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        return(
            <tr>
                <td>{this.counter(this.props.data.stg_id)}</td>
                <td>{this.props.data.detail}</td>
                <td>{this.props.data.comment}</td>
                <td>{this.props.data.emp_name}</td>
                <td>{ dateNow }</td>
                <td>{ date.getHours() }:{this.minutes(date.getMinutes())}</td>
            </tr>
           
        );
    }
}
export default Stage;