import React from "react";
class Button extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        <button type="button" className={`${this.props.style}`}>
          {this.props.text}
        </button>
      </>
    );
  }
}
export default Button;
