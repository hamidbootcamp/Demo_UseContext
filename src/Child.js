import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
// function Child(props) {
    let value = useContext(ValueContext)
    return (
    <div>
        Child Number {value}
      {/* Child Number{props.num} */}
    </div>
  );
}

export default Child;
