import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ token, children }) => {
  if (!token) {
    // Nếu không có token, chuyển hướng về trang đăng nhập
    return <Navigate to="/auth/signin" />;
  }

  // Nếu có token, cho phép truy cập
  return children;
};

export default ProtectedRoute;
