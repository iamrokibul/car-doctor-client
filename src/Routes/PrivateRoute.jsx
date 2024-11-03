import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    // if(loading){
    //     return <h3 className='text-black'>Loading...</h3>
    // }

    if(user?.email){
        return children;
    }
    return <Navigate to={'/login'} replace></Navigate>
};

export default PrivateRoute;