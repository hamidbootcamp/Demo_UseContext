import React from 'react';
import Child from './Child';
import Child2 from './Child2';

function Parent() {
// function Parent(props) {
  return (
    <div>
        Parent
        <Child></Child>
        <Child2></Child2>
        {/* <Child num={props.num}></Child> */}
    </div>
  );
}

export default Parent;
