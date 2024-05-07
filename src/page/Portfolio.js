import React from "react";
import Card from "../Utils/Card";
import H2 from "../Utils/H2";
class Portfolio extends React.Component{

    render()
    {
        return<>
        
        
        
                <div className="container  ">
                
                    
                      

                        <div className="align-content-center mx-lg-5 min-vh-100  ">
                            
                            <div className="col-lg-12  ">
                                <H2 l2="Portfolio"/>

                            </div>
                            <div className="row">
                <Card  style="car card col-lg-9 bg-dark text-light" txt="Card title"/>
                <Card  style="car card col-lg-9 bg-dark-subtle" txt="Card title"/>
                <Card  style="car card col-lg-9 bg-dark text-light" txt="Card title"/>
                <Card  style="car card col-lg-9 bg-dark-subtle" txt="Card title"/>
                <Card  style="car card col-lg-9 bg-dark text-light" txt="Card title"/>
                <Card  style="car card col-lg-9 bg-dark-subtle" txt="Card title"/>
                                
                            
                                
        
                        
                        
        </div>
        </div>
        </div>
        
        
        
        
        </>
    }
}
export default Portfolio;