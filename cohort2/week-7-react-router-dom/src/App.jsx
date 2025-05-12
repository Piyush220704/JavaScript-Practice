import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { lazy, Suspense} from "react";
import "./App.css";
const Dashboard = lazy(()=> import("./components/Dashboard")) ;
const Landing  = lazy(()=>import("./components/Landing"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Suspense fallback={"Loading ..."}><Landing /></Suspense>} />
          <Route path="/dashboard" element={<Suspense fallback={"Loading ..."}><Dashboard /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{ backgroundColor: "black", color: "white", padding: "10px" }}
      >
        <button
          onClick={() => {
            navigate("/");
          }}
          style={{ marginRight: "10px" }}
        >
          Landing
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default App;
