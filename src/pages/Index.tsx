// Legacy Index page - redirects to Home
import { Navigate } from "react-router-dom";

const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
