import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';



export default function CreateAcctPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if (password !== confirmPassword) {
                setError('password do not match');
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');

        } catch (error) {
            setError(error.message);
            
        }
    }


    

    return (
        <>
        <h1>Create  Account</h1>
        {error && <p> {error}</p>}
        <input type='email' value={email} placeholder='your email address' onChange={e => setEmail(e.target.value)}/>
        <input type='password' value={password} placeholder='your password' onChange={e =>setPassword (e.target.value)}/>
        <input type='password' value={confirmPassword} placeholder='re-enter your password' onChange={e =>setConfirmPassword (e.target.value)}/>
        <button onClick={createAccount}>Create account</button>
        <Link to='/login'>Login Account</Link>
        
        </>
    )
};