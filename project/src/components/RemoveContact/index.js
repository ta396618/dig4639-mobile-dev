import React from "react";
import PropTypes from "prop-types";
import "./index.css";

class RemoveContact extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = props.onClick;
    this.state = { position: props.position };
  }

  deleteContact = (event) => {
    event.preventDefault();
    window
      .fetch("http://plato.mrl.ai:8080/contacts/remove", {
        method: "POST",
        headers: {
          api: "raviba",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          position: this.state.position,
        }),
      })
      .then((response) => response.json())
      .then(() => {
        this.onClick(this.state.position);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <button
          className=' delete btn btn-outline-warning '
          onClick={this.deleteContact}
        >
          Delete Contact
        </button>
      </div>
    );
  }
}

RemoveContact.propTypes = {
  onClick: PropTypes.func,
};

export default RemoveContact;
