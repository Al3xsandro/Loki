import GlobalStyles from "./styles/GlobalStyles";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Routes } from "./routes";

import { AuthProvider } from './contexts/AuthContext';
import { PlayerProvider } from './contexts/PlayerContext';

export default function App() {
    return (
        <AuthProvider>
            <PlayerProvider>
                <GlobalStyles/>
                
                <ToastContainer style={{ padding: '1rem' }}/>

                <Routes/>
            </PlayerProvider>
        </AuthProvider>
    );
};