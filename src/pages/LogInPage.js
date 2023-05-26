import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export default function LogInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (error) {
            setError(error.message);
        }

    }

    return (
        <>
        <h1>Login  Account</h1>
        {error && <p> {error}</p>}
        <input type='email' value={email} placeholder='your email address' onChange={e => setEmail(e.target.value)}/>
        <input type='password' value={password} placeholder='your password' onChange={e =>setPassword (e.target.value)}/>
        <button onClick={logIn}>Log In</button>
        <Link to='/CreateAcct'>create account</Link>
        
        </>
    )
};