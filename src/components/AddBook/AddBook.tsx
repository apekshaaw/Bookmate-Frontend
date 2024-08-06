// src/components/AddBook/AddBook.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fileToBase64 } from '../../utils/fileToBase64';

const AddBook: React.FC = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [pdf, setPdf] = useState<File | null>(null);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleAddBook = async () => {
        const imageBase64 = image ? await fileToBase64(image) : null;
        const pdfBase64 = pdf ? await fileToBase64(pdf) : null;

        const newBook = {
            title,
            image: imageBase64,
            pdf: pdfBase64,
            description,
            isFavorite: false,
        };

        const storedBooks = localStorage.getItem('books');
        const books = storedBooks ? JSON.parse(storedBooks) : [];
        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));

        navigate('/home');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Add a Book</h2>
            <div style={styles.form}>
                <input
                    type="text"
                    placeholder="Book Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="file"
                    accept="image/*"
                    placeholder="Choose Image file"
                    onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                    style={styles.input}
                />
                <input
                    type="file"
                    accept="application/pdf"
                    placeholder="Choose PDF"
                    onChange={(e) => setPdf(e.target.files ? e.target.files[0] : null)}
                    style={styles.input}
                />
                <textarea
                    placeholder="Book Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={styles.textarea}
                />
                <button onClick={handleAddBook} style={styles.button}>Add Book</button>
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

export default AddBook;
