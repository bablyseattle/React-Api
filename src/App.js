import React, { useState, useEffect } from "react";
import './App.css';
const url = 'https://reqres.in/api/users?page='

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getUsers = async () => {
    const response = await fetch(url + currentPage);
    const items = await response.json()
    setUsers(items.data);
    setCurrentPage(items.page);
    setTotalPages(items.total_pages);
  }

  const onClickNext = () => {
    setCurrentPage(prev => prev + 1)
  }

  const onClickPrevious = () => {
    setCurrentPage(prev => prev - 1)
  }


  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, [currentPage])



  return (
    < div className="App" >
      <h1>Users</h1>
      <ul className="users">
        {users.map((user) => {
          const { id, first_name, last_name, avatar } = user
          return <li key={id}>
            <img src={avatar} alt={first_name} />
            {first_name} {last_name}
          </li>
        })}
      </ul>
      <nav>
        <button onClick={() => onClickPrevious()} className="button">Prev</button>
        <button disabled={currentPage >= totalPages} onClick={() => onClickNext()} className="btn">Next</button>
      </nav>
    </div >
  );
}

export default App;
