import { Component } from 'react';
import Prism from "prismjs";
import "./css/prism.css";

class Codeblock extends Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div>
        <pre>
          <code className={`language-${this.props.language}`}>
          {this.props.children}
          </code>
        </pre>
      </div>
    );
  }
}

export default Codeblock;