import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Task/header-task';
import Stage from './stage';
class StageList extends Component{
    state = {
        job:[]
    }
    
    componentWillMount() {
        
        fetch('http://localhost:3001/api/onStage')
            .then((response) => response.json())
            .then(List => {
                console.log(List);
                this.setState({ job: List });
                
            });
    }
   
    
    render(){
        return(
        <div className="container">
                <Header/>
                    <div className="">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Job No.</th>
                               
                                <th>ทะเบียนรถ</th>
                                <th>วันรับรถ</th>
                                <th>วันส่งรถ</th>
                                <th>สถานะ</th>
                                <th></th>
                            </tr>
                        </thead>
                    {
                        this.state.job.map(items =>(
                            <tbody className="col-12 col-sm-6 col-lg-4 mt-3 " key={items.id}>
                                <Stage data={items}/>
                            </tbody>
                        ))
                    }
                      </table>
                      </div>
            </div>
        )
    }
    
}

export default StageList;