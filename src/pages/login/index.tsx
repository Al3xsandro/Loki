import { HeaderMenu } from '../../components/header';
import { Container } from './style';

import { useState, FormEvent } from 'react';

import { useAuth } from '../../hooks/useAuth';

import { useHistory } from 'react-router';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const { 
        signIn,
        isAuthenticated
    } = useAuth();

    if(isAuthenticated){
        history.push('/dashboard');
    };

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        if(!email.trim() || !password){
          return;
        };

        await signIn({ email, password });
    };

    return (
        <>
            <HeaderMenu/>

            <Container>
                   <div className="container_form">
                       <h1 className="title">Entrar</h1>

                       <form className="form" onSubmit={handleLogin}>
                            <label>
                                <span className="span">Email</span>

                                <input
                                    className="input"
                                    type="email"
                                    placeholder="Seu e-mail"
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                <span className="span">Senha</span>

                                <input
                                    className="input"
                                    type="password"
                                    placeholder="Sua senha"
                                    onChange={event => setPassword(event.target.value)}
                                    required
                                />
                            </label>

                            <button className="button" type="submit">Entrar</button>
                       </form>
                        <div className="newUser">
                            <p>Novo por aqui? <a href="/signup">Cadastre-se</a></p>
                        </div>
                   </div>
            </Container>
        </>
    );
};