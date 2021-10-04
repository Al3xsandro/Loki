import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import { AuthProvider } from '../contexts/AuthContext';
import { PlayerProvider } from '../contexts/PlayerContext';

import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { SignUp} from '../pages/signUp/index';

export function Routes() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <PlayerProvider>
                    <Switch>
                        <Route path="/dashboard" component={Home} />
                        <Route path="/" component={Login} exact />
                        <Route path="/signup" component={SignUp} />
                    </Switch>
                </PlayerProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}