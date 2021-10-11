import styled from "styled-components";


export const RepositoryInfo = styled.section `
    margin-top: 100px;


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
        margin-top: 30px;

        strong{
            font-size:  36px;
            color: ${props => props.theme.colors.text};
            margin-top: 4px;
        }

        p{
            font-size: 18px;
            width: 80%;
            letter-spacing: 0.2px;
            line-height: 140%;
            color:${props => props.theme.colors.primary};
            margin-top: 10px;
        }
    }

    ul{
        display: flex;
        list-style: none;
        margin-top: 40px;
        margin-left: 25px;

        li{
            & + li {
                margin-left: 80px;

            }
            strong{
                display: block;
                font-size: 36px;

                color: ${props => props.theme.colors.text};

                svg{
                    margin-right: 10px;
                }
            }

            span{
                display: block;
                margin-top: 4px;
                color: ${props => props.theme.colors.primary};
            }
        }
    }
@media(max-width: 900px) {
    header {
        width: 70vw;
        margin: auto;
        justify-content: center;

        p{
            font-size: large;
            width: 100%;
        }


        img{
            width: 70px;
            height: auto;
        }

        div{
            margin-left: 5px;
            strong{
                font-size: 32px;
            }
        }
    }
    ul{
        width:100vw;
        justify-content: center;
        margin: 30px 0;

        li {
            & + li{
            margin-left: 40px;
        }

            strong{
            font-size: large;
            display: flex;
            flex-direction: column;

            svg{
                margin: 5px;
                width: 20px;
            }
        }

        }

    }
}
`;

export const Issues = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a{
        background-color: ${props => props.theme.colors.strong};
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
            box-shadow: 1px 1px ${props => props.theme.colors.secondary};

        }
        & + a {
            margin-top: 16px;
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
