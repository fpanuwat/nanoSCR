import React from 'react';
import {Component} from  'react';

class Product extends Component{
    /*state={

    }*/
    plus =()=>{
        fetch("http://localhost:3001/api/plusProduct")
        .then((response) => response.json())
        .then(List => {
           console.log(List);
            this.setState({ Products: List });
            
        });
    }
    minus =()=>{
        fetch("http://localhost:3001/api/Products")
        .then((response) => response.json())
        .then(List => {
           console.log(List);
            this.setState({ Products: List });
            
        });
    }
    render(){
        return(
        <div className="container">
            <div className="card">
                <div>ชื่อสินค้า : {this.props.data.product_name}</div>
                <div className="card-body">
               
                    
                    <div>จำนวนคงเหลือ : {this.props.data.product_amount} ชื้น</div>
                    <div>ราคา : {this.props.data.product_ราคา} บาท</div>
                    <div className="number">
                        <span className="minus">-</span>
                        <input type="text" value='0'/>
                        <span className="plus">+</span>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Product;