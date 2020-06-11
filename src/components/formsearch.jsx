import React, { Component } from "react";

class Form extends Component {
  
  handdleChange = (event) => {
    this.props.searchFunction(event.target.value);
  }
  
  render () {
    return (
      <input type="text" className="form-control form-search"
        onChange={this.handdleChange}/>
    );
  }
}

export default Form;
