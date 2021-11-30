import { 
    createContext,
    useState,
    ReactNode,
    useEffect
} from "react";

import { useHistory } from "react-router";

import { auth } from "../services/firebase";

import { toast } from 'react-toastify';

type User = {
    uid: string;
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
    isLoading: boolean;
    signIn({ email, password }: signIn): Promise<void>;
    signUp({ email, password}: signUp): Promise<void>;
};

type AuthContextProviderProps = {
    children: ReactNode
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const isAuthenticated = !!user;

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token.loki')
        const user = localStorage.getItem('user');

        if(token) {
            setUser({ uid: String(user) });
        };

    }, [])

    async function signIn({
        email,
        password
    }: signIn) {
        setIsLoading(true);

        await auth.signInWithEmailAndPassword(email, password)
        .then(response => {
            const token = response?.user?.getIdToken;

            setUser({ uid: String(response.user?.uid) });

            localStorage.setItem('token.loki', String(token));
            localStorage.setItem('user', String(response?.user?.uid))

            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            toast.error(String(err.message));
        });
    };

    async function signUp({
        email,
        password
    }: signUp){
        setIsLoading(true);

        await auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            history.push('/');
        }).catch((err) => {
            toast.error(String(err.message));
            setIsLoading(false);
        })
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            signIn,
            signUp,
            isLoading,
            user
        }}>
            { children }
        </AuthContext.Provider>
    )
}