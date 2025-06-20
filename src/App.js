import { Component } from 'react';
import Codeblock from './components/Codeblock.js';
import Hello from './components/Hello.js';
import './App.css';

class App extends Component {
  render() {

    let helloworldCode = `public static void main(String[] args) {
  System.out.println("Hello World");
}`;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Codeblock</h1>
          <Codeblock language="javascript">
            {helloworldCode}
          </Codeblock>

          <h1>Hello</h1>
          <Hello/>
        </header>
      </div>
    );
  }
}

export default App;
