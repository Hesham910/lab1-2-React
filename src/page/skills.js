import React from "react";
import Paragraph from "../Utils/p";
import Progress from "../Utils/Progress";
import Li from "../Utils/Li";
import H2 from "../Utils/H2";
class Skills extends React.Component{

    render(){
        return<>
        
        
        <div className="container bg-black  min-vh-100 align-items-center">
        <div className="row">
        
    
    <div>sd </div>
            
    
    <div className="col-sm-10 text-center offset-sm-1 text-light ">
        <H2 l2="Skills"/>

        <Paragraph p="Lorem ipsum dolor sit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero ipsa quis laudantium deleniti dolore, at repudiandae asperiores delectus reiciendis animi commodi inventore doloremque doloribus unde nostrum nobis dolor minus. amet consectetur adipisicing elit. Itaque exercitationem optio voluptate ut maxime laudantium hic odit nulla inventore sed vitae, sapiente atque odio laborum fugit officia mollitia consequatur illum."/>
    </div>
    
    
        <div className="  d-flex flex-wrap justify-content-around mt-5">

            <div className="className col-md-3 d-flex flex-wrap justify-content-end">
            
                
                <div className="col-10">

                    <div className="offset-lg-3 text-light text-center "><h4>focus</h4></div>
    
                </div>
                            <div style={{ height: 1 }} className=" bg-light col-sm-8 my-1 "></div>
                                    <ul className="text-light">
                                        <Li li="Cras justo odio"/>
                                        <Li li="Dapibus ac facilisis"/>
                                        <Li li="Morbi leo risus"/>
                                        <Li li="Porta ac consectetur ac"/>
                                        <Li li="Vestibulum at eros"/>
                                       
                                      </ul>
                            
                            </div>
                    
                    <div className="col-lg-3 ">
                    <Progress style={{width:100}} grade="HTML"/>
                    <Progress style={{width:100}} grade="CSS"/>
                    <Progress style={{width:100}} grade="PHP"/>
                    <Progress style={{width:250}} grade="React"/>
                    <Progress style={{width:40}} grade="JS"/>
                    <Progress style={{width:50}} grade="Laravel"/>
                    <Progress style={{width:300}} grade="Node"/>

                        </div>
        </div>
           
            </div>
            </div>
            
            
        </>
    }
}
export default Skills;