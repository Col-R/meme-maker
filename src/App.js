import './App.css';

// components
import Header from './components/Header'
import Meme from './components/Meme'
import Test from './components/Test'

import ComplexState from './components/ComplexState'

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      <Test />
      <ComplexState />
    </div>
  );
}

export default App;
