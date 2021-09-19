import { Container } from './style';

import { HeaderMenu } from '../../components/header';
import { Featured } from '../../components/featured';
import { Player } from '../../components/player';

import { usePlayer } from '../../hooks/usePlayer';

export function Home() {
    const { showPlayer } = usePlayer();

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