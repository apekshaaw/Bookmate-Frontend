import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AddBook from './components/AddBook/AddBook';
import BookDescription from './components/BookDescription/BookDescription';
import UpdateBook from './components/UpdateBook/UpdateBook';
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';
import Settings from './components/Settings/Settings';
import Security from './components/Security/Security';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup'; // Import Signup
import Favourites from './components/Favourites/Favourites';
import LandingPage from './components/LandingPage/LandingPage'; // Import LandingPage

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/add-book" element={<AddBook />} />
                <Route path="/book-description" element={<BookDescription />} />
                <Route path="/update-book" element={<UpdateBook />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/security" element={<Security />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} /> {/* Add the Signup route */}
                <Route path="/favourites" element={<Favourites />} />
            </Routes>
        </Router>
    );
};

export default App;
