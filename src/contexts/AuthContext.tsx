import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: { email: string; firstName: string; lastName: string } | null;
  login: (email: string, firstName?: string, lastName?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{
    email: string;
    firstName: string;
    lastName: string;
  } | null>(null);

  useEffect(() => {
    // Check if user is logged in on app start
    const savedAuth = localStorage.getItem("autocraft_auth");
    if (savedAuth) {
      try {
        const authData = JSON.parse(savedAuth);
        setIsAuthenticated(true);
        setUser(authData.user);
      } catch (error) {
        // If parsing fails, clear the invalid data
        localStorage.removeItem("autocraft_auth");
      }
    }
  }, []);

  const login = (email: string, firstName = "", lastName = "") => {
    const userData = { email, firstName, lastName };
    setUser(userData);
    setIsAuthenticated(true);

    // Save to localStorage for persistence
    localStorage.setItem("autocraft_auth", JSON.stringify({ user: userData }));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);

    // Clear from localStorage
    localStorage.removeItem("autocraft_auth");
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
