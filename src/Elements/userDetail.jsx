import React from "react";
import "./userDetail.css";

let UserDetail = () =>{
    return(
        <div className="container">
            <div id="error"></div>
            <img src="" alt="" id="img" hidden></img>
            <div id="detail">
                <p className="" id="dID" style={{marginLeft: "1%"}} hidden={true}>ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <samp id="Id"></samp>
                </p>
                <p className="" id="dName" hidden={true}>Name: &nbsp;
                    <samp id="fName"></samp>&nbsp;&nbsp;
                    <samp id="lName"></samp>
                </p>
                <p className="" id="dEmail" hidden={true}>Email:
                    <samp id="email"></samp>
                </p>
            </div>
        </div>
    )
}

export default UserDetail;