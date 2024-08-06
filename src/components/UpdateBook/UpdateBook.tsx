// src/components/UpdateBook/UpdateBook.tsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateBook: React.FC = () => {
    const location = useLocation();
    const { book, index } = location.state;
    const [title, setTitle] = useState(book.title);
    const [image, setImage] = useState<File | null>(null);
    const [pdf, setPdf] = useState<File | null>(null);
    const [description, setDescription] = useState(book.description);
    const navigate = useNavigate();

    const handleUpdateBook = () => {
        const updatedBook = {
            ...book,
            title,
            image: image ? URL.createObjectURL(image) : book.image,
            pdf: pdf ? URL.createObjectURL(pdf) : book.pdf,
            description,
        };

        const storedBooks = localStorage.getItem('books');
        if (storedBooks) {
            const books = JSON.parse(storedBooks);
            books[index] = updatedBook;
            localStorage.setItem('books', JSON.stringify(books));
        }

        navigate('/home');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Update Book</h2>
            <div style={styles.form}>
                <input
                    type="text"
                    placeholder="Update Book Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="file"
                    accept="image/*"
                    placeholder="Update Image file"
                    onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                    style={styles.input}
                />
                <input
                    type="file"
                    accept="application/pdf"
                    placeholder="Update PDF"
                    onChange={(e) => setPdf(e.target.files ? e.target.files[0] : null)}
                    style={styles.input}
                />
                <textarea
                    placeholder="Update Book Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={styles.textarea}
                />
                <button onClick={handleUpdateBook} style={styles.button}>Update Book</button>
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
    textarea: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        height: '100px',
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

export default UpdateBook;
