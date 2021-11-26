import GlobalStyles from "./styles/GlobalStyles";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Routes } from "./routes";

export default function App() {
    return (
        <>
            <GlobalStyles/>
            
            <ToastContainer style={{ padding: '1rem' }}/>

            <Routes/>

        </>
    );
};