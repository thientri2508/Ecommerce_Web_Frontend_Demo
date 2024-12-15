import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User } from "../types/User";

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (data: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (token) {
      try {
        // Decode token để kiểm tra nếu cần (tuỳ yêu cầu ứng dụng)
        const userData = JSON.parse(localStorage.getItem("user") || "null");
        setUser(userData);
      } catch (error) {
        console.error("Error decoding token:", error);
        logout();
      }
    }
  }, [token]);

  const login = (data: User) => {
    setToken(data.token);
    setUser({
      id: data.id,
      email: data.email,
      phone_number: data.phone_number,
      user_name: data.user_name,
      avatar: data.avatar,
      full_name: data.full_name,
      birthday: data.birthday,
      gender: data.gender,
      token: data.token
    });

    localStorage.setItem("token", data.token);
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: data.id,
        email: data.email,
        phone_number: data.phone_number,
        user_name: data.user_name,
        avatar: data.avatar,
        full_name: data.full_name,
        birthday: data.birthday,
        gender: data.gender,
      })
    );
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
