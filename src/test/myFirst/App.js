import React from 'react';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Error404 from './Error404';
import { BrowserRouter ,Route ,Link ,NavLink, Switch} from 'react-router-dom';
const App =()=>{
    return(
        <BrowserRouter>
            
            <div>
                <ul>
                    <li><Link to ="/">home</Link></li>
                    <li><Link to ="/post/3">post</Link></li>
                    <li><Link to ="/profile">profile</Link></li>
                </ul>
                <ul>
                    <li><NavLink to ="/">home</NavLink></li>
                    <li><NavLink to ="/post/4" activeStyle={{color:"green"}}>all post</NavLink></li>
                    <li><NavLink to ="/profile" activeClassName="my-active">user profile</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to ="/post/1">post 1</NavLink></li>
                    <li><NavLink to ="/post/2">post 2</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to ="/home">Home</NavLink></li>
                    <li><NavLink to ="/post" activeStyle={{color:"blue"}}>All Post</NavLink></li>
                    <li><NavLink to ="/home">Home</NavLink></li>
                    <li><NavLink to ="/home">Register</NavLink></li>
                </ul>
            <Switch>
                <Route path="/post/:id" component={Post}/>
                <Route path="/" component={Home}/>
                <Route path="/post" component={Post}/>
                <Route   component={Error404}/>
            </Switch>
            </div>
        
        </BrowserRouter>
    );
}
export default App;