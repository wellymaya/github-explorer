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

export const ButtonS = styled.div`
    a{
    text-decoration: none;
    margin-right: 15px;
    color: ${props => props.theme.colors.text};
    float: right;
    position: absolute;
    left: 90%;
    top: 48px;

    }
`;
