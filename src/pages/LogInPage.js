import {useState} from 'react';
import Link from 'react-router-dom';


export default function LogInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    return (
        <>
        <h1>Login  Account</h1>
        <input type='email' value={email} placeholder='your email address' onChange={e => setEmail(e.target.value)}/>
        <input type='password' value={password} placeholder='your password' onChange={e =>setPassword (e.target.value)}/>
        <button>Log In</button>
        <Link to='/CreateAcct'>create account</Link>
        
        </>
    )
};