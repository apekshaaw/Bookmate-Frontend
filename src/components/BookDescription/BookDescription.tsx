// src/components/BookDescription/BookDescription.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const BookDescription: React.FC = () => {
    const location = useLocation();
    const { book } = location.state;

    const handleReadBook = () => {
        if (book.pdf) {
            const pdfWindow = window.open();
            pdfWindow?.document.write(
                `<iframe width='100%' height='100%' src='${book.pdf}'></iframe>`
            );
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Book Description</h2>
            <div style={styles.bookDetails}>
                {book.image && <img src={book.image} alt={book.title} style={styles.bookImage} />}
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <button onClick={handleReadBook} style={styles.button}>Read Book</button>
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
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
        color: '#333',
    },
    bookDetails: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        width: '300px',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    bookImage: {
        width: '150px',
        height: '200px',
        objectFit: 'cover' as 'cover',
        marginBottom: '10px',
    },
    button: {
        backgroundColor: '#91B5A6',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default BookDescription;
