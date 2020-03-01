import React from "react";
import Card from "../Card/index.js";
import cardData from "./data.json";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: cardData.cards
    };
  }

  removeCard(title) {
    let cardData = this.state.cardData;
    cardData = cardData.filter(v => v.title !== title);
    this.setState({ cardData });
  }

  render() {
    return (
      <div>
        {this.state.cardData.map(v => (
          <Card
            key={v.title}
            title={v.title}
            content={v.content}
            cardData={this.state.cardData}
            removeCard={() => this.removeCard(v.title)}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
