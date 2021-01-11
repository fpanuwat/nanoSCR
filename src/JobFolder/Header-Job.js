import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ReactSession from '../ReactSession/ReactSession';
class Header extends Component{
    state = {
        collapse : false
    }
    logout =()=>{
        ReactSession.remove("front");
        alert("ออกจากระบบแล้ว");
        console.log('remove session '+ ReactSession.remove("front") +'session');
    }
    render(){
        const date = new Date();
        const dateNow = date.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        //const timeNow = date.getHours();//.getMinutes();
        //console.log(date.getHours());
        //console.log(date.getUTCHours());
        return(
            <div>
                <div className="jumbotron text-center" >
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
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                        <Link className="nav-link" to="#"><p className="text-white">{ReactSession.get("front")}</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/loadJob">งานทั้งหมด</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/openJob">สร้างงาน</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/loadLe">งานที่เสร็จ</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/valid"></Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/store"></Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="#">{dateNow}</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/" onClick={this.logout}>ออกจากระบบ</Link>
                        </li>
                    </ul>       
                </div>
            </nav>
            </div>
        );
    }
}
export default Header;