// src/components/EditProfile/EditProfile.tsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditProfile: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [profileImage, setProfileImage] = useState<string | null>(location.state?.profileImage || null);
    const [name, setName] = useState(location.state?.name || '');
    const [email, setEmail] = useState(location.state?.email || '');

    useEffect(() => {
        if (location.state) {
            setProfileImage(location.state.profileImage);
            setName(location.state.name);
            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleImageRemove = () => {
        setProfileImage(null);
    };

    const handleUpdateProfile = () => {
        const profile = {
            profileImage,
            name,
            email,
        };
        localStorage.setItem('profile', JSON.stringify(profile));
        navigate('/profile');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Your Profile</h1>
            {profileImage && <img src={profileImage} alt="Profile" style={styles.profileImage} />}
            <button onClick={handleImageRemove} style={styles.removeButton}>
                Remove Photo
            </button>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleUpdateProfile} style={styles.updateButton}>
                Update Profile
            </button>
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
    profileImage: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover' as 'cover',
        marginBottom: '20px',
    },
    removeButton: {
        backgroundColor: '#91B5A6',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '20px',
    },
    input: {
        width: '300px',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    updateButton: {
        backgroundColor: '#91B5A6',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default EditProfile;
