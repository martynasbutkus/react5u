import React, { useState, useEffect } from 'react';
import './App.css';
import './Users.css';
import PrintUser from './PrintUser';

function App() {
  const [user, setUser] = useState();

  const fetchData = async () => {
    const resp = await fetch('https://api.github.com/users/dkoncius');
    const data = await resp.json();
    setUser(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="block">
        <PrintUser user={user} fetchData={fetchData} />
      </div>
    </>
  );
}

export default App;
