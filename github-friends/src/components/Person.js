import React from "react";

class Person extends React.Component {
  componentDidUpdate() {
    console.log("Person: Component Updated");
  }

  render() {
    console.log("Person: Render Component");
    return (
      <div>
        <h1>Hello {this.props.name}.</h1>
        <img src={this.props.avatar} alt="this is alt text" />
      </div>
    );
  }
}
export default Person;
