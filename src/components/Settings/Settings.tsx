// src/components/Settings/Settings.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
    const navigate = useNavigate();

    const handleDeleteProfile = () => {
        localStorage.removeItem('profile');
        navigate('/profile');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Settings</h1>
            <button onClick={handleDeleteProfile} style={styles.deleteButton}>Delete Profile</button>
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
    },
    title: {
        fontSize: '2rem',
        marginBottom: '20px',
    },
    deleteButton: {
        backgroundColor: '#91B5A6',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        border: 'none',
    },
};

export default Settings;
