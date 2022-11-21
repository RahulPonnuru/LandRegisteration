import React from "react";
import '../css/style.css';
import '../css/demo.css'
import '../css/login-form.css'
import Register from "./Register";

function Home() {
    return (
        <div>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
            <div className="side-bar">
                <div className="close-btn">
                    <i className="fas fa-times"></i>
                </div>
                <div className="menu">
                    <div className="item"><a ><i className="fas fa-desktop"></i>Dashboard</a></div>
                    <div className="item">
                        {/* <button className="sub-btn">Register</button> */}
                        <a class="sub-btn"><i class="fas fa-table"></i>Register<i class="fas fa-angle-right dropdown"></i></a>
                        <a  className="sub-item" onclick="register_fun()"> Users</a>
                        <a  className="sub-item" onclick="register_fun_assest()">Assets</a>
                    </div>
                    <div className="item"><a><i className="fas fa-th"></i>Search</a></div>
                    <div className="item"><a ><i className="fa fa-clipboard"></i>Mutation</a></div>
                    <div className="item"><a ><i className="fa fa-database"></i>Records</a></div>
                    <div className="item"><a><i className="fa fa-database"></i>Vendor list</a></div>
                    <div className="item">
                        <a className="sub-btn"><i className="fas fa-cogs"></i>Settings<i className="fas fa-angle-right dropdown"></i></a>
                        <div className="sub-menu">
                            <a  className="sub-item">User Profile</a>
                            <a  className="sub-item">Land Data</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;