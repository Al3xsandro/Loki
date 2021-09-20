import { Container } from './style';

import { HeaderMenu } from '../../components/header';
import { Featured } from '../../components/featured';
import { Player } from '../../components/player';

import { usePlayer } from '../../hooks/usePlayer';
import { useAuth } from '../../hooks/useAuth';

import { useHistory } from 'react-router';

export function Home() {
    const { showPlayer } = usePlayer();
    const { isAuthenticated } = useAuth();
    
    const history = useHistory();

    if(!isAuthenticated){
        history.push('/');
    };

    return (
        <>
            <HeaderMenu/>
            
            <Container>
                <Featured/>
                {
                    showPlayer && <Player/>
                };
            </Container>
        </>
    );
};