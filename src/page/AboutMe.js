import React from "react";
import Paragraph from "../Utils/p";
import Button from "../Utils/Button";
import H2 from "../Utils/H2";
class AboutMe extends React.Component{
    render(){
        return<>
        
        <div className="container mt-5">
            <div className="row">
                

                    <div className="col-lg-3 text-lg-center ">
                        
                        <H2 l2="about me"/>
                    </div>

                    <div className="col-lg-8 AboutMe()">
                  <Paragraph p="Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sequi explicabo omnis commodi, placeat debitis obcaecati beatae delectus, ipsam reiciendis ullam inventore incidunt. Ipsa, illo debitis omnis modi perspiciatis cum. amet consectetur adipisicing elit. Consectetur quos, sequi perferendis asperiores, quam molestias ab culpa architecto sed dolor autem inventore exercitationem. Id quo tempora veritatis suscipit saepe blanditiis."/>
                  <Button style="btn mt-5 btn-dark  border-white rounded-0 " text="Download Resume"/>

                    
                    </div>
                    <div className="text-center mb-5">
    
                    </div>
                
            </div>
        </div>
        
    
       
        </>
    }


}
export default AboutMe;