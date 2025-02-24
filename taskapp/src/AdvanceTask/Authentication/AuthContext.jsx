import React, { createContext, useState, useContext } from 'react';

// context holds authentication state and provides functions like login and logout
const AuthContext = createContext();

// provide context value to all child component using AuthContext.Provider
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
// useAuth - to ease access authcontext and its values
// in this way component don't need to manually call 
export const useAuth = () => {
    return useContext(AuthContext);
};
