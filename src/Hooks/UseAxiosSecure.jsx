import axios from 'axios';
import { useEffect } from 'react';
import UseAuth from './UseAuth';

const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-seven-bice.vercel.app',
    withCredentials: true,
});

const UseAxiosSecure = () => {
    const { usersignout } = UseAuth();

    useEffect(() => {
        // Add response interceptor
        const responseInterceptor = axiosInstance.interceptors.response.use(
            (response) => response, // Pass through successful responses
            (error) => {
                console.log('Error caught in interceptor:', error.response || error.message);

                // Check for 401 or 403 status codes
                if (error.response?.status === 401 || error.response?.status === 403) {
                    console.log('Unauthorized or Forbidden: Logging out user...');
                    usersignout()
                        .then(() => console.log('User logged out successfully'))
                        .catch((logoutError) => console.error('Error during logout:', logoutError));
                }

                return Promise.reject(error); // Reject promise for downstream error handling
            }
        );

        // Cleanup interceptor on unmount
        return () => {
            axiosInstance.interceptors.response.eject(responseInterceptor);
        };
    }, [usersignout]); // Dependency array includes usersignout to avoid stale closures

    return axiosInstance;
};

export default UseAxiosSecure;
