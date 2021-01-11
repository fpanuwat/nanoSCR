import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component{
    state = {
        collapse : false
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto text-center">
                <Link className="navbar-brand" to="/">SC Garage</Link>
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/loadJob">JOB</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/openJob">Create Job</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout/$">Logout</Link>
                        </li>
                    </ul>       
                </div>
            </nav>
        );
    }
}
export default Header;