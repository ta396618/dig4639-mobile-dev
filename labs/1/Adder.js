class Adder {
  constructor(props) {
    this.props = props;
  }
  sum() {
    let c = this.props.a + this.props.b;
    return c;
  }
  render() {
    console.log(
      `The sum of ${this.props.a} and ${this.props.b} is ${this.sum()}`
    );
  } //
}
module.exports = Adder;
