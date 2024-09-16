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
        <p>User name: {this.props.userName}</p>
        <img src={this.props.avatar} alt="this is alt text" />
        <h2>Followers</h2>
        <ul>
          {this.props.followers.map((item) => (
            // console.log(item)
            <li>{item.login}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Person;
