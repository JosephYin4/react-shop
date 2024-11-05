import React from 'react';

function Shout({ msg }) {
  return (
    <div>
      {msg.toUpperCase()}
    </div>
  );
}

export default Shout;
