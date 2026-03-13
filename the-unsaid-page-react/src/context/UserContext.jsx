import { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [points, setPoints] = useState(() => {
        const savedPoints = localStorage.getItem('unsaid-points');
        return savedPoints ? parseInt(savedPoints, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem('unsaid-points', points.toString());
    }, [points]);

    const addPoints = (amount) => {
        setPoints((prev) => prev + amount);
    };

    return (
        <UserContext.Provider value={{ points, addPoints }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
