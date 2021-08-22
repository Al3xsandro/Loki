import { Container } from './style';

import { HeaderMenu } from '../../components/header';
import { Featured } from '../../components/featured';

export function Home() {
    return (
        <>
            <HeaderMenu/>
            
            <Container>
                <Featured/>
            </Container>
        </>
    );
};