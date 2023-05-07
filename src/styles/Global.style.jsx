import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
    margin: 0;
    padding: 0;
}

::-moz-selection {
    background: ${({ theme }) => theme.colors.primary};
    text-shadow: none;
    color: ${({ theme }) => theme.colors.white};
}

::selection {
    background: ${({ theme }) => theme.colors.primary};
    text-shadow: none;
    color: ${({ theme }) => theme.colors.white};
}

body{
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0px;
    line-height: 1.35;
    font-family: ${({ theme }) => theme.fonts.body};
}

h2{
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
}

h4{
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
}

p{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}

a {
    text-decoration: none !important;
    outline: none;
    transition: all .4s;
}

ul, 
ol {
    list-style: outside none none;
    margin: 0px;
    padding: 0px;
}

.color-red{
    color: ${({ theme }) => theme.colors.red};
}
`;

export default GlobalStyles;
