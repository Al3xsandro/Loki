import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100vh;
    width: 100%;
    
    background: url(/images/background.png) center center / 100% 100% no-repeat;

    box-shadow: rgb(0 0 0 / 70%) 0px 0px 400px 510px inset;
    
    overflow: hidden;

    .container_form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        border-radius: 0.8rem;
        
        width: 24.9rem;
        height: 27rem;
        
        margin: 0px auto;

        background: rgb(18,18,20);
        
        padding: 2.6rem;

        .title {
            font-family: 'Roboto', sans-serif;
            color: var(--white);
            font-size: 1.2rem;
            text-align: center;
        }

        .form {
            display: flex;
            justify-content: center;
            flex-direction: column;

            height: 100vh;
            width: 100%;
        
            label {
                display: flex;
                flex-direction: column;

                padding: 0.2rem 0.3rem 1rem;

                .span {
                    font-family: 'Lexend', sans-serif;
                    color: var(--white);
                    font-size: 1rem;
                    margin: 0.3rem;
                }

                .input {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    outline: none;
                    background: rgb(32 32 36);
                    border-style: none;

                    margin: 0.3rem;

                    border-radius: 0.3rem;
                    color: var(--white);

                    height: 3rem;
                    width: 19rem;

                    padding: 1rem;
                }
            }
            .button {
                display: flex;
                justify-content: center;
                align-items: center;

                padding: 1rem;
                background: #f3ff0078;

                border-radius: .3rem;
                border-style: none;
                color: var(--white);
                margin: 0.6rem;
                width: 19rem;

                cursor: pointer;

                font-family: Roboto, sans-serif;
                font-weight: 600;
                font-size: 1rem;
            
                &:hover {
                    filter: brightness(0.9);
                    transition: 0.3s ease;
                }
            }
        }

        .newUser {
            display: flex;
            justify-content: center;

            p {
                color: #FFFF;
                font-family: 'Roboto', sans-serif;
            }

            a {
                color: #f3ff0078;
                text-decoration: none;
                cursor: pointer;
                line-height: 1rem;
                padding: 1rem 0.1rem;
                opacity: 0.9;
                font-size: 1rem;
                font-family: Roboto, sans-serif;
            }
        }

        @media(max-width: 968px){
            display: flex;
            flex-direction: column;
            justify-content: center;

            width: 20rem;
            height: 27rem;

            .form {
                display: flex;
                justify-content: center;
                flex-direction: column;

                label {
                    .input {
                        width: 14rem;
                    }
                }

                .button {
                    width: 14rem;
                }
            }
        }
    }
`;