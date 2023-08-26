import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);
  return (
    <div className="not-found">
      <div className="nf-message">
        <p className="display-1 text-center">404 Page Not Found</p>
      </div>
    </div>
  );
};

export default NotFound;
