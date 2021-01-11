import React from 'react';
import { Redirect } from 'react-router-dom';
const PostItem =(props)=>{
    const checkRedirect = () =>{
        return(
            <Redirect to="/"/>
        );

    }
    const condition = props.title.trim().length==null;
    return(

        <div>
            {condition?checkRedirect:null}
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <hr/>
        </div>
    );
}
export default PostItem;