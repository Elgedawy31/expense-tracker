import { auth, firestore } from "@/config/firebase";
import { AuthContextType, UserType } from "@/types";
import { useRouter } from "expo-router";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType>(null);
  const router = useRouter();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName,
        });
        updateUserData(firebaseUser.uid)
        router.replace("/(tabs)");
      } else {
        setUser(null);
        router.replace("/(auth)/welcome");
      }
    });

    return () => unsub();
  }, [setUser, router]);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return {
        success: true,
      };
    } catch (error: any) {
      let msg = error.msg;
      return {
        success: false,
        msg,
      };
    }
  };
  const register = async (email: string, password: string, name: string) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password ,
      );
      await setDoc(doc(firestore, "users", response.user.uid), {
        name,
        email,
        uid: response.user.uid,
      });
      return {
        success: true,
      };
    } catch (error: any) {
      console.log(error)
      let msg = error.msg;
      return {
        success: false,
        msg,
      };
    }
  };
  const updateUserData = async (uid: string) => {
    try {
      const docReF = doc(firestore, "Users", uid);
      const docSnap = await getDoc(docReF);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const userData: UserType = {
          name: data.name,
          email: data.email,
          uid: data?.uid,
          image: data.image || null,
        };

        setUser(userData);
      }
    } catch (error: any) {
      let msg = error.msg;
      console.error(msg);
    }
  };
  const contextValue: AuthContextType = {
    login,
    register,
    updateUserData,
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No Context Here");
  } else {
    return context;
  }
};
