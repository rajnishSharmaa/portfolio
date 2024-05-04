import React from "react";
import styles from "../../page.module.css";



export default function myservices() {
    return (
        <>
            <div>
                <div style={{ width: "10%", color: "white", textAlign: "center", borderRadius: "5px", padding: "10px", marginLeft: "120px", backgroundColor: "#2F2F2F" }}>

                    <p>SERVICES</p>
                </div>
                <h4 style={{ color: "white", padding: "10px", marginLeft: "110px", }}>D E S I G N &nbsp;&nbsp; S E R V I C E S &nbsp;&nbsp; I &nbsp; A M &nbsp;&nbsp; P R O V I D I N G</h4>


            </div>

            <div style={{display:"flex", justifyContent:"space-evenly",   width:"100%", padding:"45px"}}>
                <div style={{ backgroundColor:"white", width:"30%",borderRadius:"10px", height:"40vh", padding:"10px"}}>
                    <img style={{width:"100%" , height:"30vh" ,borderRadius:"10px"}} src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <p>Website Design</p>
                </div>
                <div style={{ backgroundColor:"white", width:"30%",borderRadius:"10px", height:"40vh", padding:"10px"}}>
                <img style={{width:"100%" , height:"30vh", borderRadius:"10px"}} src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <p>E-Commerce Website</p>
                </div>
                <div style={{ backgroundColor:"white", width:"30%",borderRadius:"10px", height:"40vh", padding:"10px"}}>
                <img style={{width:"100%" , height:"30vh", borderRadius:"10px"}} src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <p>Chat Applications</p>
                </div>
            </div>
        </>
    );
}