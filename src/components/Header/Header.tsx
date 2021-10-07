import {shade} from 'polished';
import logoImg from '../../assets/logo.svg';
import { useContext } from 'react';
import {StyleHeader} from './styles'

import Switch from 'react-switch'
import {ThemeContext} from 'styled-components'


interface Props {
    toggleTheme(): void;
}


export const Header:React.FC<Props> = ({toggleTheme}, props)=> {

    const {colors, title} = useContext(ThemeContext)

    return(
        <>
        <StyleHeader>

        <img src ={logoImg} alt="Github Explorer" />
        <div>

            <Switch
            className="switch"
            onChange={toggleTheme}
            checked= {title == 'dark'}
            checkedIcon={false}
            uncheckedIcon= {false}
            height= {20}
            width= {40}
            handleDiameter={20}
            offColor={ shade (0.1, colors.secondary)}
            onColor={colors.primary}
            />

        </div>
        </StyleHeader>
        </>
    )
}

