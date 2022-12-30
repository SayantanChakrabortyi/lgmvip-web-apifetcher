import React from "react";
import Loader from './loader';
import UserDetail from './userDetail';

let loadUser = () =>{   
    
    return(
        <div className="container" id="loadUser">
            <p id="fatching" hidden><Loader /></p>
            <p id='fatched'><UserDetail/></p>
        </div>
    )
}

export default loadUser;