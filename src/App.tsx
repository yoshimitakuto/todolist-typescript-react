import React, { useState } from 'react';
import './App.css';
import { type } from 'os';

function App() {
  // Todoという型しかこの配列に入りませんよ〜という指定（ReactのHocksの書き方）
  const [todos, setTodos] = useState<Todo[]>([]);

  // 型を指定(最初に型を宣言しておくことでエラーを未然に防げる)
  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

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
