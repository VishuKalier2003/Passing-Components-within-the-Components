import './App.css';
// { App component } present in components folder
// Retrieving the required component by the folder identity
import { Heading } from './components/Heading'
import { ChildNode } from './components/ChildNode'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading>Placement I like</Heading>
        <ChildNode>
          <Heading>Placement as Subheading</Heading>
        </ChildNode>
        </header>
    </div>
  );
}

export default App;
