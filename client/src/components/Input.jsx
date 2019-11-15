import React from 'react';

const Input = (props) => {
  const { label, type } = props;
  return (
    <div>
      <form>
        <input type="text" placeholder={label} />
        <input type="text" placeholder={type} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Input;
