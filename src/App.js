import { Component } from "react";

// hooks can only be used inside React fxns, not class components
// hooks must always be called at the top level of the component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      msg: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // setColor("blue");
    this.state.color === "red"
      ? this.setState({ color: "blue" })
      : this.setState({ color: "red" });

    this.setState({ msg: "Super Secret Message" });
  }

  render() {
    return (
      <>
        <h1 style={{ background: this.state.color }}>React Hooks Demo</h1>
        <h1>{this.state.msg}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </>
    );
  }
}

export default App;
