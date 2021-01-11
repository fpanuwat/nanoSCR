import React from 'react';
import Box from './Box';
const Posts = ()=> {
    const data1 = [
        {id: 1,name: 'aaaaa'},
        {id: 2,name: 'bbbbb'},
        {id: 3,name: 'ccccc'},
        {id: 4,name: 'ddddd'},
    ]
    const data2 = [
        {id: 7,name: 'aaaaa'},
        {id: 6,name: 'bbbbb'},
        {id: 5,name: 'ccccc'},
 
    ]
  /*  const list1 = data1.map((i) => {
        return(
            <div key={i.id}>
                <span>id : {i.id}</span>
                <span>name : {i.name}</span>
            </div>
        );
    });
    const list2 = data2.map((i) => {
        return(
            <div key={i.id}>
                <span>id : {i.id}</span>
                <span>name : {i.name}</span>
            </div>
        );
    });
    return(
        <Box>
            {list1}
            {list2}
         </Box>
    )
}
export default Posts;*/
    return data1.map( (i)=>{
        return (
            <div key={i.id}>
                <span>id : {i.id}</span>
                <span>name : {i.name}</span>
            </div>
        )
    });
}
export default Box(Posts, 'My Hello');