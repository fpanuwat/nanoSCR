import React from 'react';
import { Component } from 'react';
import Header from './header';
import { Link } from 'react-router-dom';
class Info extends Component{
    state={
        Member:[],
        dpt_id:'',
        dpt_name:'',
        auth:''
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        fetch('http://localhost:3001/api/checkerId/'+id)
        .then((response) => response.json())
        .then(List => {
            
            this.setState({ 
                Member: List,
                author: List[0].author
            });
            //console.log(this.state.Member);
       
       
        fetch('http://localhost:3001/api/loadDpt/'+List[0].author)
        .then((response) => response.json())
        .then(List =>
            this.setState({ 
                dpt_id: List[0].dpt_id,
                dpt_name: List[0].dpt_name,
            })
        )
         }); 
    }
    setDate=(e)=>{
        const datee = new Date(e);
        const date2 = datee.toLocaleDateString('th-TH', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
        return date2;
    }

    render(){
        
        let list = this.state.Member.map(items => (
            
            <div className="w3-container w3-teal" key={items.id}>
                <table className="table table-success">
                    <thead className="thead-light"><tr><th colspan="2">รายละเอียด</th></tr></thead>
                    <tbody>
                        <tr>
                            <th className = "table-info">Username</th>
                            <td>{items.username}</td>
                        </tr>
                        <tr>
                            <th className = "table-info">Password</th>
                            <td>{items.password}</td>
                        </tr>
                        <tr>
                            <th className = "table-info">ระดับสิทธิ์</th>
                            <td>{this.state.dpt_name}</td>
                        </tr>
                        <tr>
                            <th className = "table-info">ชื่อ-สกุล</th>
                            <td>{items.emp_name} {items.emp_lname}</td>
                        </tr>
                        <tr>
                            <th className = "table-info">เบอร์โทรศัพท์</th>
                            <td>{items.telephone}</td>
                        </tr>
                    
                        <tr>
                            <th className = "table-info">รหัสประชาชน</th>
                            <td>{items.emp_id}</td>
                        </tr>
                        
                        <tr>
                            <th className = "table-info">วันเกิด</th>
                            <td>{this.setDate(items.birthday)}</td>
                        </tr>
                        
                        <tr>
                            <th className = "table-info">เพศ</th>
                            <td>{items.sex}</td>
                        </tr>
                    
                        <tr>
                            <th className = "table-info">ที่อยู่</th>
                            <td>{items.address}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ));
        return(
            
            <div className="container">
                <Header/> 
                <div className="container">
                    <Link to="/config"><button className="btn btn-link">back</button></Link>
                </div>   
               
                <div className="container">{list}</div>
                 
             </div>
        )
    }
}
export default Info;