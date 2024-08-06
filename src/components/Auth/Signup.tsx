// src/components/Auth/Signup.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/bookmate.png'; // Adjust path as necessary

const Signup: React.FC = () => {
    const navigate = useNavigate();

    const handleSignup = () => {
        // Logic for signup (e.g., API call) would go here
        navigate('/login'); // Redirect to login page after signup
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div style={styles.container}>
            <img src={logo} alt="Bookmate Logo" style={styles.logo} />
            <div style={styles.form}>
                <input type="email" placeholder="Enter Email" style={styles.input} />
                <input type="password" placeholder="Enter password" style={styles.input} />
                <input type="password" placeholder="Confirm password" style={styles.input} />
                <button onClick={handleSignup} style={styles.button}>Sign Up</button>
                <div style={styles.footer}>
                    <p>Already have an Account? <a onClick={handleLogin} style={styles.link}>Login</a></p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#ffffff',
        textAlign: 'center' as 'center',
    },
    logo: {
        width: '150px',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as 'column',
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
        textAlign: 'center' as 'center',
    },
    link: {
        color: '#91B5A6',
        textDecoration: 'none',
        cursor: 'pointer',
    },
};

export default Signup;
