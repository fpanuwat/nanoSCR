//MyRedux
import React from 'react';
import {BrowserRouter, Route, Switch}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, createStore} from 'redux';
import reducer from './redux';
import {Provider} from 'react-redux';
import PageNotFound from '../MyRedux/not-found-page';
import Thunk from 'redux-thunk';
//----
//Job ---
import JobList from '../JobFolder/Job-List';
import EditJob from '../JobFolder/Edit-Job';
//----
//Task ---
import TaskList from '../Task/task-list';
import TaskDetail from '../Task/detial-task';
import TaskState from '../Task/task-state';
//----
//FORM ---
import Register from '../Form/RegisterForm';
import Login from '../Form/LoginForm';
import OpenJob from '../Form/Open-job-form';
//----
// control to view data----
import Customer from '../Task/Data-detail/data-customer';
import Insurance from '../Task/Data-detail/data-insurance';
import AboutCar from '../Task/Data-detail/data-car';
import AboutDate from '../Task/Data-detail/data-date';
import AboutDamage from '../Task/Data-detail/data-damage';
//----
import Student from './Student';
import StudentList from './Student-Lists';

function App(){
    const store = createStore (reducer, applyMiddleware(Thunk));
  
    return (
        <Provider store = {store}>
        <div className="container">
            <BrowserRouter>
              
               <Switch>
                    <Route 
                        exact path="/"
                        component={StudentList}
                        />
                    <Route 
                        exact path="/Student"
                        component={Student}
                        />
                    <Route 
                        exact path="/StudentList"
                        component={StudentList}
                        />
                    <Route 
                        exact path="/loadTask"
                        component={TaskList}
                        />
                    <Route 
                        exact path="/editDetail/:id"
                        component={EditJob}
                        />
                    <Route 
                        exact path="/taskDetail/:id"
                        component={TaskDetail}
                        />
                    <Route 
                        exact path="/register"
                        component={Register}
                        />
                    <Route 
                        exact path="/login"
                        component={Login}
                        />  
                    <Route 
                        exact path="/logout"
                        component={Login}
                        /> 
                    <Route 
                        exact path="/customer/:id"
                        component={Customer}
                        />
                     <Route 
                        exact path="/insurance/:id"
                        component={Insurance}
                        />
                    <Route 
                        exact path="/aboutCar/:id"
                        component={AboutCar}
                        />
                    <Route 
                        exact path="/aboutDate/:id"
                        component={AboutDate}
                        />
                    <Route 
                        exact path="/aboutDamage/:id"
                        component={AboutDamage}
                        />
                    <Route 
                        exact path="/taskstate"
                        component={TaskState}
                        />      
                    <Route component={PageNotFound}/>
                   
                </Switch>
            </BrowserRouter>

        </div>
        </Provider>
    ); 
} 
export default App;
