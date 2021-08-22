import styled from 'styled-components';

export const Header = styled.header`
    display: flex;

    width: 100%;
    height: 6.75rem;

    background: var(--header);

    .profile {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        padding: 2rem;

        .title {
            font-family: 'Roboto', sans-serif;
            font-weight: 600;
            color: #fff;

            strong {
                color: #f3fd2b;
            }
            
            font-size: 1.75rem;
        }
    }
`;