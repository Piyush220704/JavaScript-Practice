// Appbar.jsx
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post("http://localhost:5000/api/v1/user/logout", {}, {
        withCredentials: true
      });
      navigate("/signin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="shadow h-14 flex justify-between items-center px-4">
      <div className="text-2xl font-bold">PayTM App</div>
      <div className="flex items-center gap-4">
        <span>Hello</span>
        <div className="rounded-full h-10 w-10 bg-slate-200 flex items-center justify-center text-xl">U</div>
        <button onClick={logout} className="text-sm text-red-600 underline">Logout</button>
      </div>
    </div>
  );
}

export default Appbar;
