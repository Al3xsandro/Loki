import { HeaderMenu } from '../../components/header';
import { Container } from './style';

export function Login() {
    return (
        <>
            <HeaderMenu/>

            <Container>
                   <div className="container_form">
                       <h1 className="title">Entrar</h1>

                       <form className="form">
                            <label>
                                <span className="span">Email</span>

                                <input
                                    className="input"
                                    type="email"
                                    placeholder="Seu e-mail"
                                    required
                                />
                            </label>

                            <label>
                                <span className="span">Senha</span>

                                <input
                                    className="input"
                                    type="password"
                                    placeholder="Sua senha"
                                    required
                                />
                            </label>

                            <button className="button">Entrar</button>
                       </form>
                   </div>
            </Container>
        </>
    );
};