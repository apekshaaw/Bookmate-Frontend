import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8070',  // Adjust if backend runs on a different port or server
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export const loginUser = async (data: never) => {
    try {
        const response = await api.post('/User/login', data);
        return response.data;
    } catch (error: never) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

export const signupUser = async (data: never) => {
    try {
        const response = await api.post('/User/save', data);
        return response.data;
    } catch (error: never) {
        throw new Error(error.response?.data?.message || 'Signup failed');
    }
};

export const resetPassword = async (email: string) => {
    try {
        const response = await api.post('/User/reset-password', { email });
        return response.data;
    } catch (error: never) {
        throw new Error(error.response?.data?.message || 'Password reset failed');
    }
};