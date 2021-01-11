import React, { Component } from 'react';
import Header from '../header-task';
import Jobxx from '../../JobFolder/J-detail';

class dataDetail extends Component{
    state = {
        job:[]
    }
  /*  onChangeData = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }*/
    
    componentWillMount() {
         const userId =this.props.match.params.id.toString();
         fetch('http://localhost:3001/api/getJobDe/'+userId)
         .then((response) => response.json())
         .then(List => {
             console.log(List);
             this.setState({ job: List });
             
         });
         
     } 
    onSubmitJob =() =>{
        const id =this.props.match.params.id.toString();
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
                'My-Custom-Header': 'foobar'
            }
    
         
        };
            fetch('http://localhost:3001/api/oStage/'+id, requestOptions)
                .then(response => response.json())
        this.props.history.push('/loadJob');

    }
    render(){
        return(<form >
                <div className="container">
                    <Header/>  
                    <div className="">
                                <div class="btn">
                                    <button className="btn btn-outline-danger btn-sm mr-1"
                                            onClick={ ()=> this.props.history.push('/loadJob')}>back</button>
                                </div>
                                
                       </div>    
                    <div className="container">
                    {
                        this.state.job.map(items =>(
                            <tbody className="col-12 col-sm-6 col-lg-4 mt-3 " key={items.id}>
                                <Jobxx data={items}/>
                            </tbody>
                        ))
                    }
                       
                    </div>
                
                </div>  
            </form>
        )
    }
    
}

export default dataDetail;