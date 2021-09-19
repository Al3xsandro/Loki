import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import { AuthProvider } from '../contexts/AuthContext';
import { PlayerProvider } from '../contexts/PlayerContext';

import { Home } from '../pages/home';
import { Login } from '../pages/login';

export function Routes() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <PlayerProvider>
                    <Switch>
                        <Route path="/dashboard" component={Home} />
                        <Route path="/" component={Login} exact />
                    </Switch>
                </PlayerProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}