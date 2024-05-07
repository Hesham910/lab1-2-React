import React from "react";
import Button from "../Utils/Button";
import H2 from "../Utils/H2";

class ContactMe extends React.Component{
    render(){
        return <>
        <div className="container img">
            <div className="row "></div>
         <div className="rady  bg-image d-flex flex-column justify-content-center   vh-100">
            <div className=" col-6 mo  text-center text-light ">
        
                <h1>Hisham hassen</h1>
                <H2 l2="Web Developer&Designer"/>

                
                <Button style="btn mt-5 btn-dark border border-white rounded-0" text="CONTACT ME"/>
            </div>
        </div>
        </div>
        
        </>
    }
} 
export default ContactMe;