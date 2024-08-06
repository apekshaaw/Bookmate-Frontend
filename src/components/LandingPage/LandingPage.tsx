// src/components/LandingPage/LandingPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/bookmate.png';
import openBook from '../../assets/images/book.jpg';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const handleStartReading = () => {
        navigate('/login');
    };

    return (
        <div style={styles.container}>
            <img src={logo} alt="Bookmate Logo" style={styles.logo} />
            <h1 style={styles.heading}>Open a Book and Discover a World of Endless Possibilities.</h1>
            <button onClick={handleStartReading} style={styles.button}>Start Reading</button>
            <img src={openBook} alt="Open Book" style={styles.bookImage} />
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
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
        color: '#333',
    },
    button: {
        backgroundColor: '#91B5A6',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    bookImage: {
        marginTop: '20px',
        width: '200px',
    },
};

export default LandingPage;
