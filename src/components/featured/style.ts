import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    height: 100vh;
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
                flex-direction: column;

                padding: 1rem 2.75rem;

                .featured_details {
                    display: flex;
                    justify-content: space-between;

                    margin-top: 0.3rem;

                    max-width: 22rem;

                    .feature_details {
                        display: flex;
                        align-items: center;

                        .feature_time {
                            font-size: 1rem;
                            color: var(--white);
                            font-family: B612, sans-serif;
                            font-weight: bold;
                        }

                        .rating {
                            padding: 1rem 1.8rem;
                        }
                        
                        .feature_release {
                            font-size: 1rem;
                            color: var(--white);
                            font-family: B612, sans-serif;
                            font-weight: bold;
                        }
                    }
                }

                .featured_description {
                    font-family: 'B612', sans-serif;
                    color: var(--white);
                }
            }

            .featured_buttons {
                .watch_now {
                    padding: 1rem;
                    color: var(--white);
                    background: var(--blue);
                    border-style: none;
                    font-family: 'Roboto', sans-serif;
                    font-weight: bold;
                    border-radius: 0.3rem;
                }
                .watch_trailer{
                    padding: 0.88rem;
                    margin: 1rem;
                    color: var(--white);
                    border: solid 1px;
                    background: #131318;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 700;
                    border-radius: 0.1rem;
                }

                .watch_now, .watch_trailer {
                    &:hover {
                        opacity: 0.8;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    @media(max-width: 768px){
        display: flex;
        background: url('/images/background-mobile.png') no-repeat center;
        background-size: 100% 100%;

        height: 100%;

        .featured_section {
            display: flex;
            justify-content: center;
            flex-direction: column;

            .feature_logo {
                display: flex;
                justify-content: center;

                margin: 0 auto;
            }
            
            .featured_content {
                display: flex;
                justify-content: center;

                width: 20rem;
                margin: 1rem;

                text-align: center;

                .featured_details {
                    display: flex;
                    align-items: center;

                    .feature_details {
                        .rating {
                            margin-left: -1rem;
                        }
                    }
                }
            }

            .featured_buttons {
                padding: 1rem;
            }
        }
    }
`;