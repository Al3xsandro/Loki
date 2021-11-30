import { Header } from "./style";
import { GiHamburgerMenu } from 'react-icons/gi'

export function HeaderMenu() {
    return (
        <Header>
            <div className="profile">
                <h1 className="title">Loki<strong>Flix</strong></h1>

                <button className="menu_hamburguer">
                    <GiHamburgerMenu style={{ 
                        color: '#FFFFFF',
                        width: '2rem',
                        height: '3rem'
                    }}/>
                </button>
            </div>
        </Header>
    );
};