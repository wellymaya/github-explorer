import { createGlobalStyle} from 'styled-components';
import image from '../assets/github.svg'

export default createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body{
    -webkit-font-smothing: antialiased;
    background-image: url(${image});
    background-size: 650px;
    background-position:top right;
    background-repeat: no-repeat;

    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};

    }


body, input, button{
    font: 16px 'Roboto', sans-serif;
}

#root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    }

button{
    cursor: pointer;
}
`;
