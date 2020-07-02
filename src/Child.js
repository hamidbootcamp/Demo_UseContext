import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
// function Child(props) {
    let value = useContext(ValueContext);
    console.log("value", value);
    let updatevalue = value[1];
    return (
    <div>
        Child Number {value[0]}
        <button onClick= {()=>{updatevalue(++value[0])}}>Update Value</button>

        {/* <button onClick= {()=>{value[1](++value[0])}}>Update Value</button> */}
      {/* Child Number{props.num} */}
    </div>
  );
}

export default Child;
