import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import { Home } from '../pages/home';

export function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}