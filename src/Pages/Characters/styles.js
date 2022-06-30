import styled from "styled-components";

export const Container = styled.div`
    max-width: 1140px;
    margin: auto;
`;
export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    .naruto-characters {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 839px;
        width: 100%;
        text-align: center;

        h1 {
            color: white;
            font-weight: 400;
            font-size: 35px;
        }

        img {
            height: 350px;
            width: 350px;
            border-radius: 10px;
            margin-top: 30px;
        }

        a {
            text-decoration: none;

            button {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 60px;
                width: 150px;
                font-size: 14px;
                font-weight: bold;
                background-color: #393939;
                border: none;
                border-radius: 5px;
                color: white;
                cursor: pointer;

                &:hover {
                    background-color: white;
                    color: black;
                    transition: all ease .4s;
                }
            }
        }
    }

    
`;