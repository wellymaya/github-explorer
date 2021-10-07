import React from "react";
import { BrowserRouter, Link } from 'react-router-dom'
import usePersistedState from "./utils/usePerisistedState";

import {DefaultTheme, ThemeProvider} from 'styled-components'
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyle from './styles/global';

import Routes from "./routes";
import { Header } from "./components/Header/Header";

const App: React.FC = () => {

    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

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
