import { HeaderMenu } from '../../components/header';
import { Container } from './style';

import { useState, FormEvent } from 'react';

import { useAuth } from '../../hooks/useAuth';

import { ClipLoader } from 'react-spinners';
import { useHistory } from 'react-router';

export function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const { 
        signUp,
        isLoading
    } = useAuth();

    async function handleSignUp(event: FormEvent) {
        event.preventDefault();

        if(!email.trim() || !password){
          return;
        };

        await signUp({ email, password });
        history.push("/");
    };

    return (
        <>
            <HeaderMenu/>

            <Container>
                   <div className="container_form">
                       <h1 className="title">Cadastrar-se</h1>

                       <form className="form" onSubmit={handleSignUp}>
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

                            <button className="button" type="submit">
                                {
                                    isLoading ? <ClipLoader size="20px" color="#ffff" /> : <> Cadastrar-se </>
                                }
                            </button>
                       </form>
                   </div>
            </Container>
        </>
    );
}