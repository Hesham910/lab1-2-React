import React from "react";
class Card extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return<>
        
        <div className="col-sm-4 my-sm-3 ">
                        <div className={`${this.props.style}`} >
                            <div className="card-body  align-content-center text-center">
                            <h5 className="card-title">{this.props.txt}</h5>
                            
                            </div>
                            
                            </div>
    
                </div>
        </>
    }
}
export default Card;