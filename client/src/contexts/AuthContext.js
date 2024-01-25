import axios from "../axios";
import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [currentUsername, setCurrentUsername] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/user/isauth", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setCurrentUser(res.data.id);
        console.log(res.data.id)
        setCurrentUsername(res.data.username);
        console.log(res.data)
        setLoading(false);
      })
      .catch(() => {
        setCurrentUser(null);
        setCurrentUsername(null);
        setLoading(false);
      });
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    currentUsername,
    setCurrentUsername,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
