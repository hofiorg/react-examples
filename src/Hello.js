import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ['Eins', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben', 'Acht', 'Neun'],
    };
  }

  createList = (arr) =>
    arr
      .filter(s => s.startsWith('S'))
      .map((s) => <li>{s}</li>);

  render() {
    return (
      <div>
        <p>
          Hello {this.props.name}!
        </p>
        <ul>{this.createList(this.state.value)}</ul>
      </div>
    );
  }
}

export default Hello;
