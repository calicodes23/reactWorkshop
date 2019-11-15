import React from 'react';

const Child = (props) => {
  // FIXME: you can not reassign anything in the props object, it will error. Object.isFrozen(props) === true
  console.log('Object.isFrozen(props)', Object.isFrozen(props));
  const { text } = props;
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default Child;
