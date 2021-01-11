import React from 'react';
 /* const Box = (props) => {
  return(
        <div>
            <h2>This is from box.</h2>
            {props.children}
        </div>
    )
   
}*/
const Box = (WarppedComponent,param) => {
       return (props) =>{
           return(
               <div>
                    {param}
                    <WarppedComponent/>
                </div>
           )
         
     }
 }
export default Box;