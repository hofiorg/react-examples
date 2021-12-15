import { Component } from 'react';
import MyButton from "./MyButton";
import Clock from "./Clock";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      value: ['Eins', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben', 'Acht', 'Neun'],
    };
  }

  createList = (arr) =>
    arr
      .filter(s => s.startsWith('S'))
      .map((s) => <li key={s}>{s}</li>);

  clickFunction = () => {
    this.setState((state) => ({
      counter: state.counter + 1
    }));
  };

  render() {
    return (
      <div>
        <p>
          Hello {this.props.name}! Counter: {this.state.counter}
        </p>
        <Clock/>
        <MyButton text='Test' onclick={this.clickFunction}/>
        <br/>
        <ul>{this.createList(this.state.value)}</ul>
      </div>
    );
  }
}

export default Hello;
