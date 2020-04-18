import React from "react";
import PropTypes from "prop-types";
import "./index.css";

class AddContact extends React.Component {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
    this.numberRef = React.createRef();
    this.onSubmit = props.onSubmit;
  }

  getInput = (event) => {
    event.preventDefault();
    let name = this.nameRef.current.value.trim();
    let number = this.numberRef.current.value.trim();
    if (name.length > 0 && number.length > 0) {
      window
        .fetch("http://plato.mrl.ai:8080/contacts/add", {
          method: "POST",
          headers: {
            api: "raviba",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name,
            number: number,
          }),
        })
        .then((response) => response.json())
        .then(() => {
          this.onSubmit(name, number);
        })
        .catch((err) => {
          console.log(err);
        });

      this.nameRef.current.value = "";
      this.numberRef.current.value = "";
    }
  };

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5 m-auto'>
              <br />
              <h1 className='display-4 text-center'>Add Contact</h1>
              <form className='form' onSubmit={this.getInput}>
                <input
                  className='form-control'
                  maxlength='20'
                  type='text'
                  placeholder='Full Name'
                  ref={this.nameRef}
                />
                <br />
                <input
                  className='form-control'
                  maxlength='20'
                  type='text'
                  placeholder='Phone Number'
                  ref={this.numberRef}
                />
                <br />
                <button className='add'>Add Contact</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddContact.propTypes = {
  onSubmit: PropTypes.func,
};

export default AddContact;
