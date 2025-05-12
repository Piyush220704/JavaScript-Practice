import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HomeRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:5000/api/v1/me", { withCredentials: true });
        navigate("/dashboard"); // if token is valid
      } catch (error) {
        navigate("/signup"); // if token is invalid
      }
    };

    checkAuth();
  }, [navigate]);

  return null; // or a loading spinner if you want
}

export default HomeRedirect;
