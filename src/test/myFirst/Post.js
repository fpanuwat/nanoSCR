import React from 'react';
import PostItem from './PostItem';
const Post =(props)=>{
   /* const id =props.match.params.id;
    let post =null;
    if(id=='1'){
        post=(<PostItem title="Hello World" content="This is a content of hello world."/>);
    }else if(id == '2'){
        post=(<PostItem title="Good Bye" content="This is a speech of good bye."/>);
    }else{
        post=(<PostItem title="out off" content="not detect anything."/>);
    }
    return(
        <div>
           {post}           
        </div>
    );*/
    return(
       <div>
            <PostItem title="home" content="hello test it again"/>
            <PostItem title="" content="not found title"/>
            <PostItem title="ohya" content="watch this"/>
        </div> 
    );
    
}
export default Post;