import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password); // return a promise
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  // const editEmail = (currentPassword, newEmail) => {
  //   this.reauthenticate(currentPassword).then(() => {
  //     var user = firebase.auth().currentUser;
  //     user.updateEmail(newEmail).then(() => {
  //       console.log("Email updated!");
  //     }).catch((error) => { console.log(error); });
  //   }).catch((error) => { console.log(error); });
  // }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // added event listener
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const [currentUser, setCurrentUser] = useState();
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}