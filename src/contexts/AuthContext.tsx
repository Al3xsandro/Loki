import { 
    createContext,
    useState,
    ReactNode
} from "react";

import { auth } from "../services/firebase";

type User = {
    email: string;
};

type signIn = {
    email: string;
    password: string;
};

type signUp = {
    email: string;
    password: string;
}

interface AuthContextData {
    isAuthenticated: boolean;
    signIn({ email, password }: signIn): Promise<void>;
    signUp({ email, password}: signUp): Promise<void>;
    showToast: boolean;
};

type AuthContextProviderProps = {
    children: ReactNode
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [showToast, setShowToast] = useState(false);

    const isAuthenticated = !!user;

    async function signIn({
        email,
        password
    }: signIn) {
        await auth.signInWithEmailAndPassword(email, password)
        .then(response => {
            setUser({ email: String(response.user?.email) });
        }).catch((err: Error) => {
            console.error(err);
            return setShowToast(true);
        });
    };

    async function signUp({
        email,
        password
    }: signUp){
        await auth.createUserWithEmailAndPassword(email, password)
        .then(response => {
            setUser({ email: String(response.user?.email) });
        }).catch((err: Error) => {
            console.error(err);
            return setShowToast(true);
        })
    }

    return (
        <AuthContext.Provider value={{ 
            showToast,
            isAuthenticated,
            signIn,
            signUp
        }}>
            { children }
        </AuthContext.Provider>
    )
}