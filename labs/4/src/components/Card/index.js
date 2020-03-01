import React from "react";
import "./index.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className='card'>
        <span
          onClick={() => this.props.removeCard(this.props.title)}
          className='close'
        >
          x
        </span>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Card;
