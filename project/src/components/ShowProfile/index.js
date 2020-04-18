import React from "react";
import "./index.css";

class ShowProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      count: 0,
    };
  }

  addToCount = () => {
    let newcount = this.state.count + 1;
    this.setState({
      name: this.state.name,
      count: newcount,
    });
  };

  removeFromCount = () => {
    let newcount = this.state.count - 1;
    this.setState({
      name: this.state.name,
      count: newcount,
    });
  };

  componentDidMount() {
    window
      .fetch("http://plato.mrl.ai:8080/profile", {
        method: "GET",
        headers: {
          api: "raviba",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          count: data.count,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='App-header'>
        User Name: {this.state.name}
        <br />
        Contacts Count: {this.state.count}
      </div>
    );
  }
}

export default ShowProfile;
