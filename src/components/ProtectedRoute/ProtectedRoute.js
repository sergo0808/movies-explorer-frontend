import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn }) => {
  return <Route>{() => (isLoggedIn ? children : <Redirect to="/movies" />)}</Route>;
};

export default ProtectedRoute;
