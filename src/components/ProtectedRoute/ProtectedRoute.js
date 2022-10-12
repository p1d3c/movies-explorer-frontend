import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children, ...props}) => {
  return props.isLoggedIn ? children : <Navigate to={props.redirectTo} />;
};

export default ProtectedRoute;
