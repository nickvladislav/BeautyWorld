import { useRef, FormEventHandler } from 'react';
import { useInput } from '../hooks/useInput';
import { AuthData } from '../common/interface/AuthData';

interface AuthFormProps {
    onLogin: (authData: AuthData) => void;
}

export function AuthForm({ onLogin }: AuthFormProps) {
    const formRef = useRef<any>();
    const userName = useInput('');
    const password = useInput('');

    const reset = () => {
        formRef.current?.reset(); 
        };

    const handleSubmit = (event: FormEventHandler<HTMLFormElement> | any): void => {
        event.preventDefault();

        onLogin({
            userName: userName.value!,
            password: password.value!,
        });
        
        reset();
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <label>
                <div>User name</div>
                <input type="text" name='userName' required {...userName} />
            </label>

            <label>
                <div>Password</div>
                <input type="password" name='password' required {...password} />
            </label>

            <button>Login</button>
        </form>
    )
}