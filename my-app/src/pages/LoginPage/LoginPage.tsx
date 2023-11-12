import { Navigate } from 'react-router-dom';

import { AuthForm } from "../../components/AuthForm";
import { useAuth } from "../../contexts/AuthContext";

function LoginPage() {
    const { isLoggedIn, login } = useAuth();

    if (isLoggedIn) {
        return <Navigate to="/" />
      }

    return (
        <>
            <div className='login-page'>
                <h1 className='login-name'>LoginPage</h1>
                <AuthForm onLogin={login} />
            </div>
        
        </>
    )
}

export default LoginPage;
