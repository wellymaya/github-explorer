import styled from 'styled-components';

export const StyleHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    div{
        display: flex;
        align-items: center;
    }
    .backButton{
        text-decoration: none;
        margin-right: 15px;
        color: ${props => props.theme.colors.text};}

    `;

export const ButtonExit = styled.div`
    a{
    text-decoration: none;
    margin-right: 15px;
    color: ${props => props.theme.colors.primary};
    float: inline-start;
    margin-top: 40px;

    }
`;
