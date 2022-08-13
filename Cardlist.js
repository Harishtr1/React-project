import React from "react";
import Net from './Net';
const Cardlist=( {Say} )=>{
return (
    <div>
        {
            Say.map((user,i)=>{
                return ( 
                    <Net key= {i} id={ Say[i].id} name={Say[i].name} email={Say[i].email} />

                );
            })

            
        }
    </div>
    );
}

export default Cardlist;