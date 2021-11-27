import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    
    position: fixed;
    top: 0;
    left: 0;

    padding: 2rem;

    .close {
        height: 1rem;
        margin-left: -3rem;
        z-index: 10;
        padding: 1rem;
        background: none;
        color: #ffff;
        border-style: none;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }
    }

    @media(max-width: 968px){
        height: 15rem;

        display: flex;

        .close {
            margin-top: 1.5rem;
        }
    }
`;