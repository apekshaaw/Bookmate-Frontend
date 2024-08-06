import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/bookmate.png'; // Adjust path as necessary
import homeIcon from '../../assets/images/home.png'; // Adjust path as necessary
import heartIcon from '../../assets/images/heart.png'; // Adjust path as necessary
import userIcon from '../../assets/images/user.png'; // Adjust path as necessary
import editIcon from '../../assets/images/edit.png'; // Import edit icon
import deleteIcon from '../../assets/images/delete.png'; // Import delete icon

const Home: React.FC = () => {
    const [books, setBooks] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedBooks = localStorage.getItem('books');
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks));
        }
    }, []);

    const handleAddBook = () => {
        navigate('/add-book');
    };

    const handleBookClick = (book: any) => {
        navigate('/book-description', { state: { book } });
    };

    const handleUpdateBook = (book: any, index: number) => {
        navigate('/update-book', { state: { book, index } });
    };

    const handleDeleteBook = (index: number) => {
        const storedBooks = localStorage.getItem('books');
        if (storedBooks) {
            const books = JSON.parse(storedBooks);
            books.splice(index, 1);
            localStorage.setItem('books', JSON.stringify(books));
            setBooks(books);
        }
    };

    const handleToggleFavorite = (index: number) => {
        const storedBooks = localStorage.getItem('books');
        if (storedBooks) {
            const books = JSON.parse(storedBooks);
            books[index].isFavorite = !books[index].isFavorite;
            localStorage.setItem('books', JSON.stringify(books));
            setBooks(books);
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                <input type="text" placeholder="search" value={searchTerm} onChange={handleSearch} style={styles.search} />
                <div style={styles.bookGrid}>
                    {filteredBooks.map((book, index) => (
                        <div key={index} style={styles.bookCard}>
                            {book.image && (
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    style={styles.bookImage}
                                    onClick={() => handleBookClick(book)}
                                />
                            )}
                            <h3>{book.title}</h3>
                            <p>{book.description}</p>
                            <div style={styles.bookActions}>
                                <button style={styles.actionButton} onClick={() => handleToggleFavorite(index)}>
                                    <span role="img" aria-label="favourite">{book.isFavorite ? '❤️' : '🤍'}</span>
                                </button>
                                <button style={styles.actionButton} onClick={() => handleUpdateBook(book, index)}>
                                    <img src={editIcon} alt="edit" style={styles.icon} />
                                </button>
                                <button style={styles.actionButton} onClick={() => handleDeleteBook(index)}>
                                    <img src={deleteIcon} alt="delete" style={styles.icon} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleAddBook} style={styles.addButton}>+</button>
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
        position: 'relative' as 'relative',
    },
    search: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '20px',
    },
    bookGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
    },
    bookCard: {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '10px',
        textAlign: 'center' as 'center',
    },
    bookImage: {
        width: '100px',
        height: '150px',
        objectFit: 'cover' as 'cover',
        marginBottom: '10px',
        cursor: 'pointer',
    },
    bookActions: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '10px',
    },
    actionButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    addButton: {
        position: 'absolute' as 'absolute',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#91B5A6',
        color: '#fff',
        padding: '15px',
        border: 'none',
        borderRadius: '50%',
        fontSize: '24px',
        cursor: 'pointer',
    },
};

export default Home;
