import React from 'react';

const Element = (props) => {
  return (
    <div 
      className="element"
      style={{backgroundColor: props.backgroundColor}}
    >
    </div>
  );
}

export default Element;