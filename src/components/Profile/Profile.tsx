// src/components/Profile/Profile.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/bookmate.png'; // Adjust path as necessary
import homeIcon from '../../assets/images/home.png'; // Adjust path as necessary
import heartIcon from '../../assets/images/heart.png'; // Adjust path as necessary
import userIcon from '../../assets/images/user.png'; // Adjust path as necessary
import editIcon from '../../assets/images/edit.png'; // Adjust path as necessary
import settingsIcon from '../../assets/images/settings.png'; // Adjust path as necessary
import securityIcon from '../../assets/images/security.png'; // Adjust path as necessary
import logoutIcon from '../../assets/images/logout.png'; // Adjust path as necessary

const Profile: React.FC = () => {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedProfile = localStorage.getItem('profile');
        if (storedProfile) {
            const profile = JSON.parse(storedProfile);
            setProfileImage(profile.profileImage);
            setName(profile.name);
            setEmail(profile.email);
        }
    }, []);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
                const profile = {
                    profileImage: reader.result as string,
                    name,
                    email,
                };
                localStorage.setItem('profile', JSON.stringify(profile));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEditProfile = () => {
        navigate('/edit-profile', {
            state: {
                profileImage,
                name,
                email,
            },
        });
    };

    const handleSettings = () => {
        navigate('/settings');
    };

    const handleSecurity = () => {
        navigate('/security');
    };

    const handleLogout = () => {
        localStorage.removeItem('profile');
        navigate('/login');
    };

    return (
        <div style={styles.container}>
            <div style={styles.sidebar}>
                <img src={logo} alt="Bookmate Logo" style={styles.logo} />
                <nav style={styles.nav}>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}>
                            <a href="/home" style={styles.navLink}>
                                <img src={homeIcon} alt="Home" style={styles.icon} /> Home
                            </a>
                        </li>
                        <li style={styles.navItem}>
                            <a href="/favourites" style={styles.navLink}>
                                <img src={heartIcon} alt="Favourites" style={styles.icon} /> Favourites
                            </a>
                        </li>
                        <li style={styles.navItem}>
                            <a href="/profile" style={styles.navLink}>
                                <img src={userIcon} alt="Profile" style={styles.icon} /> Profile
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div style={styles.content}>
                <div style={styles.profileContainer}>
                    <div style={styles.profileDetails}>
                        <div style={styles.profileImageContainer}>
                            <img src={profileImage || userIcon} alt="Profile" style={styles.profileImage} />
                        </div>
                        <div style={styles.profileText}>
                            <h2>{name}</h2>
                            <p>{email}</p>
                            <label htmlFor="imageUpload" style={styles.imageUploadLabel}>
                                Add Photo
                            </label>
                            <input
                                type="file"
                                id="imageUpload"
                                style={styles.imageUploadInput}
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                        </div>
                    </div>
                    <div style={styles.separator}></div>
                    <div style={styles.buttonsContainer}>
                        <button style={styles.button} onClick={handleEditProfile}>
                            <img src={editIcon} alt="Edit Profile" style={styles.buttonIcon} /> Edit Profile
                        </button>
                        <button style={styles.button} onClick={handleSettings}>
                            <img src={settingsIcon} alt="Settings" style={styles.buttonIcon} /> Settings
                        </button>
                        <button style={styles.button} onClick={handleSecurity}>
                            <img src={securityIcon} alt="Security" style={styles.buttonIcon} /> Security
                        </button>
                        <button style={styles.button} onClick={handleLogout}>
                            <img src={logoutIcon} alt="Log Out" style={styles.buttonIcon} /> Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
    },
    sidebar: {
        width: '250px',
        backgroundColor: '#91B5A6',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
    },
    logo: {
        width: '150px',
        marginBottom: '20px',
    },
    nav: {
        width: '100%',
    },
    navList: {
        listStyle: 'none' as 'none',
        padding: 0,
        width: '100%',
    },
    navItem: {
        marginBottom: '20px',
    },
    navLink: {
        textDecoration: 'none',
        color: '#000',
        fontSize: '18px',
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginRight: '10px',
        width: '24px',
        height: '24px',
    },
    content: {
        flex: 1,
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        textAlign: 'center' as 'center',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        width: '50%',
    },
    profileDetails: {
        display: 'flex',
        alignItems: 'center',
    },
    profileImageContainer: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        overflow: 'hidden',
        marginRight: '20px',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover' as 'cover',
    },
    profileText: {
        textAlign: 'left' as 'left',
    },
    imageUploadLabel: {
        display: 'inline-block',
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#91B5A6',
        color: '#fff',
        cursor: 'pointer',
        marginTop: '10px',
    },
    imageUploadInput: {
        display: 'none',
    },
    separator: {
        width: '100%',
        height: '1px',
        backgroundColor: '#eee',
        margin: '20px 0',
    },
    buttonsContainer: {
        width: '100%',
    },
    button: {
        width: '100%',
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#f5f5f5',
        color: '#000',
        textAlign: 'left' as 'left',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ddd',
        cursor: 'pointer',
        marginBottom: '10px',
    },
    buttonIcon: {
        marginRight: '10px',
    },
};

export default Profile;
