// src/components/Auth/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/apiService'; // Adjust path as necessary
import logo from '../../assets/images/bmmm.png'; // Adjust path as necessary

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await loginUser({ email, password });
            if (response === 'Login successful') {
                navigate('/home'); // Redirect to home page after login
            } else {
                setError('Invalid credentials');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };

    return (
        <div style={styles.container}>
            <img src={logo} alt="Bookmate Logo" style={styles.logo} />
            <div style={styles.form}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    style={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    style={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <div style={styles.error}>{error}</div>}
                <div style={styles.checkboxContainer}>
                    <input type="checkbox" id="rememberMe" />
                    <label htmlFor="rememberMe" style={styles.label}>Remember Me</label>
                </div>
                <button onClick={handleLogin} style={styles.button}>Log In</button>
                <div style={styles.footer}>
                    <a onClick={handleForgotPassword} style={styles.link}>Forgot Password?</a>
                    <p>Don't have an account? <a onClick={handleSignup} style={styles.link}>Signup</a></p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#ffffff',
        textAlign: 'center' as const,
    },
    logo: {
        width: '150px',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    label: {
        marginLeft: '5px',
    },
    button: {
        backgroundColor: '#91B5A6',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    footer: {
        marginTop: '20px',
        textAlign: 'center' as const,
    },
    link: {
        color: '#91B5A6',
        textDecoration: 'none',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        marginBottom: '10px',
    },
};

export default Login;
