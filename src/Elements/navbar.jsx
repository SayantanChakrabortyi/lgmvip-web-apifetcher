import React from "react";
import "./navbar.css";
import axios from "axios";
import "./api";
import Logo from "./logo";


let Navbar = () =>{

    window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("search").click();
    }
    });

    let showUserDetail = (evt) =>{
        document.getElementById("fatching").hidden = false;
        document.getElementById("fatched").hidden = true;

        setTimeout(function () {
            document.getElementById("fatched").hidden = false;
            document.getElementById("fatching").hidden = true;
          }, 1000);


        if (evt !== ""){
            axios.get('https://reqres.in/api/users?page=1')
            .then(res => {
                let data = res.data.data;
                let info = data.filter((item) =>{
                    return (
                        Math.floor(evt) === item.id ||
                        evt.toLowerCase().includes(item.email.toLowerCase()) ||
                        evt.toLowerCase().includes(item.first_name.toLowerCase()) ||
                        evt.toLowerCase().includes(item.last_name.toLowerCase())
                    );
                });

                let img = info[0].avatar
                let ID = info[0].id
                let fName = info[0].first_name
                let lName = info[0].last_name
                let email = info[0].email

                document.querySelector("#dID").hidden = false;
                document.querySelector("#dName").hidden = false;
                document.querySelector("#dEmail").hidden = false;
                document.querySelector("#img").hidden = false;
                document.getElementById("error").hidden = true;
                document.getElementById("img").src = img;
                document.getElementById("Id").innerHTML = ID;
                document.getElementById("fName").innerHTML = fName;
                document.getElementById("lName").innerHTML = lName;
                document.getElementById("email").innerHTML = email;

            }).catch(err => {
                document.querySelector("#dID").hidden = true;
                document.querySelector("#dName").hidden = true;
                document.querySelector("#dEmail").hidden = true;
                document.querySelector("#img").hidden = true;
                document.getElementById("error").hidden = false;
                document.getElementById("error").innerHTML = "No such data found!";
            })

            document.querySelector("#txt").value = "";
        }
        else{
            document.querySelector("#dID").hidden = true;
            document.querySelector("#dName").hidden = true;
            document.querySelector("#dEmail").hidden = true;
            document.querySelector("#img").hidden = true;
            document.getElementById("error").hidden = false;
            document.getElementById("error").innerHTML = "Please type something before you hit 'Get Users' or the 'Enter' key!";
        }
    }

    return(
        <div id="nav" >
            <Logo/>
            <input type="text" id="txt" placeholder="Search Users' data by his/her 'Name', 'Email' or 'ID'" autoFocus></input>
            <input type="submit" id="search" value="Get Users" onClick={() => showUserDetail(document.getElementById("txt").value)}></input>
        </div>
    )
}


export default Navbar;