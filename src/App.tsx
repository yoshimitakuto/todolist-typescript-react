import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Todoリスト with Typescript</h2>
        <form onSubmit={() => {}}></form>
        <input type="text" onChange={() => {}} className='inputText' />
        <input type="submit" value="作成" className='submitButton' />
      </div>
    </div>
  );
}

export default App;
