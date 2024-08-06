import axios from 'axios';

const apiUrl = 'http://localhost:8070'; // Your backend URL

// Example function to save a user
export const saveUser = async (user: any) => {
    try {
        const response = await axios.post(`${apiUrl}/User/save`, user);
        return response.data;
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
};

// Example function to login a user
export const loginUser = async (user: any) => {
    try {
        const response = await axios.post(`${apiUrl}/User/login`, user);
        return response.data;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
};
