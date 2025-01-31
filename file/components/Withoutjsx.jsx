import React from 'react';

const Message = ({ name }) => {
  return React.createElement('h2', null, `Hello, ${name}!`);
};

const Withoutjsx = () => {
  return React.createElement(Message, { name: 'Siva' });
};

export default Withoutjsx;