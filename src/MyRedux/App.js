//MyRedux
import React from 'react';
import {BrowserRouter, Route, Switch}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import PageNotFound from './not-found-page';
import thunk from 'redux-thunk';
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

import Login from '../Form/LoginForm';
import OpenJob from '../Customer/Open-job-form';
//----
// control to view data----
import t2Detail from '../Task/Data-detail/jb2-detail/detail1';
//import tDetail from '../Task/Data-detail/dt_detail';
import tDetail from '../Task/Data-detail/jb-detail/detail1';
import endit from '../Task/Data-detail/cl-detail/detail1';
import endStage from '../Stage/stage-emp/index';
//import endit from '../Task/Data-detail/re-detail';
//----
import Stage from '../Stage/stage-list';
import Register from '../Form/RegisterForm';
import upStage from '../Stage/stage-update';
import JOB2 from '../Customer/open-job2';
import Config from '../system/index';
import editeDtail from '../system/edit-detail';
import memberInfo from '../system/info-detail';
import ReactSession from '../ReactSession/ReactSession';
//testing validation
import test from '../Form/index';
import valid from '../Form/Open-job-form';
import inStore from '../Form/index';
//import inStore from '../test/Store/index';
//
function App(){
    const store = createStore(reducer,applyMiddleware(thunk));
    ReactSession.setStoreType("sessionstorage");
    return (
        <Provider store = {store}>
        <div className="container">
            <BrowserRouter>
              
               <Switch>
                <Route
                        exact path="/store"
                        component={inStore}
                   />
                    <Route
                        exact path="/valid"
                        component={valid}
                   />
                    <Route
                        exact path="/test"
                        component={test}
                   />
                    <Route
                        exact path="/memberInfo/:id"
                        component={memberInfo}
                   />
                    <Route
                        exact path="/editDtail/:id"
                        component={editeDtail}
                   />
                   <Route
                        exact path="/config"
                        component={Config}
                   />
                   
                    <Route 
                        exact path="/job2"
                        component={JOB2}
                        />
                    <Route 
                        exact path="/upStage/:id"
                        component={upStage}
                        />
                        <Route 
                        exact path="/closeJ/:id"
                        component={endit}
                        />
                    <Route 
                        exact path="/"
                        component={Login}
                        />
                    <Route 
                        exact path="/openJob"
                        component={OpenJob}
                        />
                    <Route 
                        exact path="/loadJob"
                        component={JobList}
                        />
                    <Route 
                        exact path="/loadTask"
                        component={TaskList}
                        />
                    <Route 
                        exact path="/loadStage"
                        component={Stage}
                        
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
                        exact path="/taskstate"
                        component={TaskState}
                        /> 
                    <Route 
                        exact path="/tdetail/:id"
                        component={tDetail}
                        />
                    <Route 
                        exact path="/t2detail/:id"
                        component={t2Detail}
                        />  
                     <Route 
                        exact path="/loadLe"
                        component={endStage}
                        /> 
                    
                     
                    <Route component={PageNotFound}/>
                   
                </Switch>
            </BrowserRouter>

        </div>
        </Provider>
    ); 
} 
export default App;
