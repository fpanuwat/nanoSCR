import Product from './product';
import React from 'react';
import { Component } from 'react';
import Header from './header';
class indexStore extends Component{
    state={
        Products:[]
        /*{
            id:'',
            name:'',
            amount: ''
        }*/
    }
    componentWillMount(){
        fetch("http://localhost:3001/api/Products")
        .then((response) => response.json())
        .then(List => {
           console.log(List);
            this.setState({ Products: List });
            
        });
    }
    render(){
        let list = this.state.Products.map(items => (
            <div className="col-12 col-sm-6 col-lg-4 mt-3" key={items.id}>
                <Product data={items}/>
            </div>
        ));
        return(
            <div className="container">
                <Header/>
                <div className="container">
                {list}
          
                </div>
            </div>
        );
    }
}
export default indexStore;