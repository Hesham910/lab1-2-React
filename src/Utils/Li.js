import React from "react";
class Li extends React.Component{
    constructor(){
        super();
    }
    render(){
        return<>
        
        <li className="list-group-item m-3">{this.props.li}</li>

        </>
    }
}
export default Li;