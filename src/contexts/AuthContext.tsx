import { 
    createContext,
    useState,
    ReactNode
} from "react";

import { useHistory } from "react-router";

import { auth } from "../services/firebase";

import { toast } from 'react-toastify';

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
    user: User | null;
    signIn({ email, password }: signIn): Promise<void>;
    signUp({ email, password}: signUp): Promise<void>;
};

type AuthContextProviderProps = {
    children: ReactNode
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    const isAuthenticated = !!user;

    const history = useHistory();

    async function signIn({
        email,
        password
    }: signIn) {
        await auth.signInWithEmailAndPassword(email, password)
        .then(response => {
            setUser({ email: String(response.user?.email) });
        }).catch((err) => {
            toast.error(String(err.message));
        });
    };

    async function signUp({
        email,
        password
    }: signUp){
        await auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            history.push('/');
        }).catch((err) => {
            toast.error(String(err.message));   
        })
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            signIn,
            signUp,
            user
        }}>
            { children }
        </AuthContext.Provider>
    )
}