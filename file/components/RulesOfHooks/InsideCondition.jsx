import React, { useState } from 'react';

/////////////   Do not call Hooks inside conditions or loops   ////////////

// function InsideCondition() {
//   const [login, setLogin] = useState(false);

//   if (login) {
//     const [name, setName] = useState('Siva');
//   }
  
//   return (
//     <>
//       <button onClick={() => setLogin(!login)}>Login</button>
//     </>
//   );
// };

function InsideCondition() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState('Siva');
  
  return (
    <div>
      <button onClick={() => setLogin(!login)}>
        Login
      </button>
      {login && <p>Welcome, {name}!</p>}
    </div>
  );
}

export default InsideCondition