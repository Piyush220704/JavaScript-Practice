import { useCallback, useContext, useState } from "react";
import {countAtom} from "./store/atoms/count";
import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  return (
    <div>
      <CountRender />
      <Button />
    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom);
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
