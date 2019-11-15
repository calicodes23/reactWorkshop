import React from 'react';
import Child from './Child';
import Input from './Input';

const App = (props) => {
  console.log('props', props);
  return (
    <div>
      <Child text="some text" />
      <Input label="username" type="password"/>
    </div>
  );
};

export default App;
