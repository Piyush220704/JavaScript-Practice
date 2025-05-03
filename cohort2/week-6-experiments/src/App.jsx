import { useState, memo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const [title, setTitle] = useState("");
  return (
    <div>
      <button onClick={() => setTitle(Math.random())}>Update the title</button>
      <br />
      <Header title={title} />
      <Header title="world" />
      <Header title="world1" />
      <Header title={title} />
      <Header title="world3" />
      <Header title="world4" />

    </div>
  );
}


// or we can store them in memo
const Header = memo(function Header({ title }) {
  return <div>{title}</div>;
})


// to skip re-rendering we can put the components that need re-rendering in seperately 
// function HeaderWithChildren() {
//   const [title, setTitle] = useState("");
//   return (
//     <>
//       <button onClick={() => setTitle(Math.random())}>Update the title</button>
//       <br />
//       <Header title={title} />
//     </>
//   );
// }

export default App;
