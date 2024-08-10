import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8070',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export const loginUser = async (data) => {
    try {
        const response = await api.post('/User/login', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const signupUser = async (data) => {
    try {
        const response = await api.post('/User/save', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const resetPassword = async (data) => {  // Add this function
    try {
        const response = await api.post('/User/reset-password', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
