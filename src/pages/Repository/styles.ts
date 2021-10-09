import styled from "styled-components";


export const RepositoryInfo = styled.section `
    margin-top: 80px;


    header{
        display: flex;
        align-items: center;
     }
    img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    div{
        margin-left: 24px;

        strong{
            font-size:  36px;
            color: ${props => props.theme.colors.text};
            margin-top: 4px;
        }

        p{
            font-size: 18px;
            color:${props => props.theme.colors.text};
            margin-top: 4px;
        }
    }

    ul{
        display: flex;
        list-style: none;
        margin-top: 40px;

        li{
            & + li {
                margin-left: 80px;

            }
            strong{
                display: block;
                font-size: 36px;

                color: ${props => props.theme.colors.text};
            }

            span{
                display: block;
                margin-top: 4px;
                color: #6c6c80;
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a{
        background-color: ${props => props.theme.colors.secondary};
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
            box-shadow: 1px 1px ${props => props.theme.colors.primary};

        }
        & + a {
            margin-top: 16px;
        }


        div{
            margin-left: 16px;
            flex: 1;

            strong{
                font-size: 20px;
                color: #a8a8b3;
            }

            p{
                font-size: 18px;
                color: #6c6c80;
                margin-top: 4px;
            }

        }
        svg{
            margin-left: auto;
            color: #cbcbd6;
        }


    }


`;
