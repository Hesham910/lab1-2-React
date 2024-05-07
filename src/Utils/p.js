import React from "react";
class Paragraph extends React.Component{
    constructor(props){
        super();
    }
    render()
    {
        return<>
        <p>{this.props.p}</p>
        
        
        </>
    }
}
export default Paragraph;