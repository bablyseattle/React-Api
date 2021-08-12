import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get('https://reqres.in/api/users?page=2')
      console.log(result.data)
    }
    fetchItems();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
      </header>
    </div>
  );
}

export default App;
