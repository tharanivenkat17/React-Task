import React, { useEffect, useRef, useState } from 'react'
function StrictMode() {  
  
  let reference = useRef(0)
  function handleChange() {
    reference.current = reference.current + 1;
    console.log(reference.current)
  }

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://my-json-server.typicode.com/typicode/demo/comments")
        .then(response => response.json())
        .then(data => { setData(data) })
    };

    fetchData();
  }, []);



  const userData = [{id:1,name:"siva"},
    {id:2,name:"arun"}
   ]

  return (
    <div>
      <h1>Strict Mode</h1>
      <button onClick={handleChange}>count</button>
      <div>
        {data ? (<pre>{JSON.stringify(data, null)}</pre>) : (<p>Loading data...</p>)}
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default StrictMode