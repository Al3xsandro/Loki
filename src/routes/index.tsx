import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import { Home } from '../pages/home';
import { Login } from '../pages/login';

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={Home} />
                <Route path="/" component={Login} exact />
            </Switch>
        </BrowserRouter>
    )
}