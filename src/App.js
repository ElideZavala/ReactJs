import React, { useState } from 'react';
import RisizeApp from "./RisizeApp";
// import FetchCard from "./FetchCard";
import Lifecycle from "./Lifecycle";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}> 
        Show/Hide
      </button>
      {/* <Lifecycle /> */}
      {show && <Lifecycle/>}
      {/* <FetchCard /> */}
      {/* { show && <RisizeApp/>} */}
    </div>
  );
}

export default App;
