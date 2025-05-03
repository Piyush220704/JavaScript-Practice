import { useCallback, useContext, useState } from "react";
import CountContext from "./CountContext.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </>
  );
}

function Count({ setCount }) {
  console.log("count re-rendered")
  return (
    <div>
      <CountRender />
      <Button setCount={setCount} />
    </div>
  );
}

function CountRender() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

function Button({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
export default App;
