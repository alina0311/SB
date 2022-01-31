import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from  "../context/authContext";

function PrivateRoute({ component: Component }, props) {
  const [loading, setLoading] = useState(true);

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setLoading(false);
      return;
    }
    navigate("/login");
  }, []);

  return <>{loading ? "Loading..." : <Component {...props} />} </>;
}

export default PrivateRoute;