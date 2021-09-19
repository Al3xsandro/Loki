import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    padding: 1rem;

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
`;