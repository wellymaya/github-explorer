import styled, {css} from 'styled-components';
import {shade} from 'polished';
import {motion} from 'framer-motion'



interface FormProps {
    hasError: Boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
    text-shadow: 1px 1px ${props => props.theme.colors.background};




`;

export const Form = styled(motion.form)<FormProps>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input{
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        background-color: ${props =>props.theme.colors.primary};
        color:${props =>props.theme.colors.text} ;
        border:  2px solid transparent;
        border-right: 0;

        ${(props) => props.hasError && css `
            border-color: red;

        `}

        &::placeholder {
            color: ${props => props.theme.colors.text} ;
        }
    }

    button{
        width: 210px;
        height: 70px;
        background-color: #0e9e51;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color:#fff ;
        font-weight: bold;

        &:hover{
            background: ${shade(0.2, '#04d361')};

        }
    }

`;

export const Error = styled.span `

    display: block;
    color: #c53030;

`;


export const Repositories = styled.div `
    margin-top: 80px;
    max-width: 700px;

    a{
        background-color: ${props => props.theme.colors.primary};
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        &:hover{
            transform: translateX(10px);
        }
        & + a {
            margin-top: 16px;
        }

        img{
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div{
            margin-left: 16px;
            flex: 1;

            strong{
                font-size: 20px;
                color: ${props => props.theme.colors.text};
            }

            p{
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }

        }
        svg{
            margin-left: auto;
            color: #cbcbd6;
        }
    }

`;

export const Switch = styled.div `

   width:50px;

`;
