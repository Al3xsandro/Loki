import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --background: rgb(32, 32, 36);
        --header: rgb(18, 18, 20);
        --white: #ffffff;
        --blue: #0072D2;
    };
`;