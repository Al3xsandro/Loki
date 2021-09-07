import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 1rem;

    .container_form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background: rgba(11, 11, 11, 0.29);
        
        border-radius: 0.8rem;
        
        width: 24.9rem;
        height: 27rem;
        
        margin: 0px auto;
        
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
                    font-family: 'Roboto', sans-serif;
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

                font-family: Roboto, sans-serif;
                font-weight: 600;
                font-size: 1rem;
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