import { Component } from 'react';

class MyButton extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.onclick} type="button" className="btn btn-outline-primary">{this.props.text}</button>
      </div>
    );
  }
}

export default MyButton;
