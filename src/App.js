import { Component } from 'react';
import Codeblock from './components/Codeblock.js';
import './App.css';

class App extends Component {
  render() {

    let helloworldCode = `public static void main(String[] args) {
  System.out.println("Hello World");
}`;

    return (
      <div className="App">
        <header className="App-header">
          <Codeblock language="javascript">
            {helloworldCode}
          </Codeblock>
        </header>
      </div>
    );
  }
}

export default App;
