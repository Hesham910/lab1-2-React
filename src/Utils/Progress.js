import React from "react";
class Progress extends React.Component{
    constructor(props){
        super();
                       
    }
    render(){
        return<>
             <div className="progress m-sm-4">
                            <div className=" progress-bar" role="progressbar" style= {this.props.style} aria-valuenow="100" aria-valuemin="100" aria-valuemax="100">{this.props.grade }</div>
                        </div>
        </>
    }
}
export default Progress;