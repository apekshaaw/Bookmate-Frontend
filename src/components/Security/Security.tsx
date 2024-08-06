// src/components/Security/Security.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Security: React.FC = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    const handleUpdatePassword = () => {
        const storedProfile = localStorage.getItem('profile');
        if (storedProfile) {
            const profile = JSON.parse(storedProfile);
            if (profile.password === currentPassword) {
                profile.password = newPassword;
                localStorage.setItem('profile', JSON.stringify(profile));
                alert('Password updated successfully');
                navigate('/profile');
            } else {
                alert('Current password is incorrect');
            }
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Security</h1>
            <h2 style={styles.subtitle}>Update Password</h2>
            <input
                type="password"
                placeholder="Current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                style={styles.input}
            />
            <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleUpdatePassword} style={styles.updateButton}>Update Password</button>
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
    subtitle: {
        fontSize: '1.5rem',
        marginBottom: '20px',
    },
    input: {
        width: '300px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '20px',
    },
    updateButton: {
        backgroundColor: '#91B5A6',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        border: 'none',
    },
};

export default Security;
