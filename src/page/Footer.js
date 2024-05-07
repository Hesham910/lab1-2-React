import React from "react";
import Button from "../Utils/Button";
class Footer extends React.Component
{
    render()
    {
        return<>
        
        <div class="container">
                <div class="row ">
                <section style={{height: 200}} class=" d-flex  justify-content-between bg-black">
                
                
                        <div class="text-light col-3  text-center align-content-center">
                            <h4>GET IN TOUCH</h4>
                            <p>hisham@yahoo.come</p>
                            <p>01055555757</p>
                        </div>
                        <div class="col-5  text-center align-content-center" >
                        <Button style="btn  btn-dark border border-white rounded-0" text="CONTACT ME"/>



                        </div>

                        <div class="text-light col-sm-3 w-25 text-center align-content-center">

                            <p>Copyright &copy; Hisham</p>
                        
                        </div>
                       
                       
                       
                    
                </section>
               </div>
            </div>
        </>
    }
}
export default Footer;