import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AdminRoute = ({ children }) => {
    const { current } = useSelector(state => state.user)
    if (!current || current.role !== 'admin') {
        return <Navigate to="/" />;
    }
    return children;
};

export const UserRoute = ({ children }) => {
    const { current } = useSelector(state => state.user)
    if (!current || current.role !== 'user') {
        return <Navigate to="/" />;
    }
    return children;
};
