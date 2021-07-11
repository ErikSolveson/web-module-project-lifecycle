import "./App.css";
import React from "react";
import axios from "axios";
import Person from "./components/Person";

class App extends React.Component {
  constructor() {
    console.log("AppClass: Setup State");
    super();
    this.state = {
      userName: "",
      name: "",
      avatar: "",
      inputValue: "",
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/eriksolveson`).then((res) =>
      this.setState({
        userName: res.data.login,
        name: res.data.name,
        avatarSrc: res.data.avatar_url,
      })
    );
    axios
      .get(`https://api.github.com/users/eriksolveson/followers`)
      .then((res) => this.setState({ ...this.state, followers: res.data }));
  }

  componentDidUpdate() {
    console.log("AppClass: Component Updated");
  }

  handleChange = (e) => {
    // console.log("change");
    this.setState({ ...this.state, inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    this.setState({ ...this.state, userName: this.state.inputValue });
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then((res) =>
        this.setState({
          userName: res.data.login,
          name: res.data.name,
          avatarSrc: res.data.avatar_url,
        })
      );
  };

  render() {
    console.log("AppClass: Render Component");
    return (
      <div>
        <Person
          name={this.state.name}
          userName={this.state.userName}
          avatar={this.state.avatarSrc}
          followers={this.state.followers}
        />
        <form onSubmit={this.handleSubmit}>
          {" "}
          <input
            type="text"
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            placeholder="enter a GH user name"
          ></input>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default App;
