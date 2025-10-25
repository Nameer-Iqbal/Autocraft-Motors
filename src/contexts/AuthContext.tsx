import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: {
    email: string;
    firstName: string;
    lastName: string;
    contactNumber?: string;
  } | null;
  login: (
    email: string,
    firstName?: string,
    lastName?: string,
    contactNumber?: string
  ) => void;
  logout: () => void;
  updateUser: (updates: {
    firstName?: string;
    lastName?: string;
    contactNumber?: string;
  }) => void;
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
    contactNumber?: string;
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

  const login = (
    email: string,
    firstName = "",
    lastName = "",
    contactNumber = ""
  ) => {
    const userData = { email, firstName, lastName, contactNumber };
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

  const updateUser = (updates: {
    firstName?: string;
    lastName?: string;
    contactNumber?: string;
  }) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      ...updates,
      // Ensure all fields are strings, not undefined
      firstName: updates.firstName ?? user.firstName,
      lastName: updates.lastName ?? user.lastName,
      contactNumber: updates.contactNumber ?? user.contactNumber,
    };

    // Debug: Log the update
    console.log("Updating user:", updatedUser);

    setUser(updatedUser);
    // Save to localStorage for persistence
    const authData = { user: updatedUser };
    localStorage.setItem("autocraft_auth", JSON.stringify(authData));

    // Debug: Verify it was saved
    console.log(
      "Saved to localStorage:",
      localStorage.getItem("autocraft_auth")
    );
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
