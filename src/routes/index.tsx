import { useAuth } from "../hooks/useAuth"

import { App } from "./app.routes";
import { Auth } from "./auth.routes";

export function Routes() {
    const { user } = useAuth();
    
    return (
        <>
            { user ? <App/> : <Auth/> }
        </>
    )
}