import React, {useState} from "react";
import { BrowserRouter, Link } from 'react-router-dom'

import {ThemeProvider} from 'styled-components'
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyle from './styles/global';

import Routes from "./routes";
import { Header } from "./components/Header/Header";
import {StyleHeader} from './components/Header/styles'
import { FiChevronLeft } from "react-icons/fi";

const App: React.FC = () => {

    const [theme, setTheme] = useState(light);

    const togleTheme = () => {
        setTheme(theme.title == 'light' ? dark : light);
    };

    return(
    <>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header  toggleTheme={togleTheme}/>


                <Routes  />
            </BrowserRouter>
        <GlobalStyle />

        </ThemeProvider>
    </>
);
}

export default App;
