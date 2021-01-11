import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ReactSession from '../ReactSession/ReactSession';
class Header extends Component{
    state = {
        collapse : false,
        empUser : [
            { id:'', name: '', username: '', password: '', auth: ''}
        ]
    }
    logout =()=>{
        ReactSession.remove("engineer");
        alert("ออกจากระบบแล้ว");
        console.log('remove session '+ ReactSession.remove("engineer") +'session');
    }
 
    render(){
        
        return(
            <div> <div className="jumbotron text-center" >
            <h1>SC Garage</h1>
            
        </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                
                <button className="navbar-toggler"
                type="button" data-toggle="collapse"
                data-taget="#navbarNav" aria-controls="navbarNav"
                aria-expanded="true" aria-label="Toggle navigation" >
                    <span className="navbar-toggle-icon">
                        onClick= {() =>{
                            this.setState({ collapse: !this.state.collapse});
                            console.log(this.state.collapse);
                            console.log('OK Click');
                        }}
                    </span>
                </button>
                <div 
                    className={
                        this.state.collapse? 
                        'collapse navbar-collapse show text-center pt-3': 
                        'collapse navbar-collapse'
                    }>
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/loadTask"><p className="text-white">Username: {ReactSession.get("engineer")}</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/loadTask">ส่วนการแจกงาน</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/loadStage">งานที่ถูกเปิด</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/" onClick={this.logout}>ออกจากระบบ</Link>
                        </li>
                    </ul>       
                </div>
            </nav></div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        empFromStore : state.empConnect
    }
}
export default connect(mapStateToProps, null)(Header);



/*
วันที่ 9 สอบตึก 9 ชั้น 5 
 map state 
                        <li className="nav-item">
                            <Link className="nav-link" to="/taskstate">State</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/loadJob">Back</Link>
                        </li>
*/