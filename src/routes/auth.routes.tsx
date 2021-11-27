import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import { Login } from '../pages/login';
import { SignUp} from '../pages/signUp/index';

export function Auth() {
    return (
        <BrowserRouter>
                <Switch>
                    <Route path="/" component={Login} exact />
                    <Route path="/signup" component={SignUp} />
                </Switch>
        </BrowserRouter>
    )
}