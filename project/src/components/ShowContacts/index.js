import React from "react";
import AddContact from "../AddContact/index.js";
import RemoveContact from "../RemoveContact/index.js";
import ShowProfile from "../ShowProfile/index.js";
import "./index.css";

class ShowContacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = { contacts: [] };
    this.profileRef = React.createRef();
  }

  contactWasAdded = (name, number) => {
    let newcontacts = this.state.contacts;
    let added = {
      name: name,
      number: number,
    };
    newcontacts.push(added);
    this.setState(newcontacts);
    this.profileRef.current.addToCount();
  };

  contactWasDeleted = (position) => {
    let newcontacts = this.state.contacts;
    newcontacts.splice(position, 1);
    this.setState(newcontacts);
    this.profileRef.current.removeFromCount();
  };

  componentDidMount() {
    window
      .fetch("http://plato.mrl.ai:8080/contacts", {
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
          contacts: data.contacts,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='CreateBook'>
        <ShowProfile ref={this.profileRef} />
        <AddContact onSubmit={this.contactWasAdded} />
        {this.state.contacts.map((value, index) => {
          return (
            <div className='box' key={index}>
              <p className='text'>
                Name : {value.name}
                <br />
                Phone : {value.number}
              </p>
              <RemoveContact
                onClick={this.contactWasDeleted}
                position={index}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShowContacts;
