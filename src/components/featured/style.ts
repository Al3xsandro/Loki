import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    height: 100%;
    width: 100%;

    background: url('/images/background.png') no-repeat center;
    background-size: 100% 100%;

    box-shadow: inset 0px 0px 400px 510px rgba(0, 0, 0, .7);

    overflow: hidden;

    .featured {
        display: flex;
        align-items: center;
        flex-direction: column;

        padding: 1rem;

        .featured_flag {
            font-family: 'B612', sans-serif;
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 3rem;
            color: var(--white);
        }

        .featured_title {
            font-family: 'B612', sans-serif;
            font-weight: 700;
            line-height: 7rem;
            font-size: 5.4rem;
            color: var(--white);
        }

        .featured_section {
            display: flex;
            justify-content: space-between;

            margin: 3.5rem;

            max-width: 60rem;

            .featured_content {
                display: flex;
                padding: 1rem 2.75rem;

                .featured_description {
                    font-family: 'B612', sans-serif;
                    color: var(--white);
                }
            }
        };
    }

    @media(max-width: 768px){
        background: url('/images/background-mobile.png') no-repeat center;
        background-size: 100% 100%;
    
        .featured_section {
            display: flex;
            justify-content: center;
            flex-direction: column;

            .feature_logo {
                display: flex;
                justify-content: center;

                margin: 0 auto;
            }
        }
    }
`;