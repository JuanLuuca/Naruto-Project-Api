import styled from "styled-components";

export const Container = styled.header`
    max-width: 1140px;
    margin: auto;

    .input-search {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
    }

    input { 
        height: 40px;
        width: 50%;
        outline: none;
        border: none;
        border-bottom-right-radius: 20px;
        padding: 0px 20px;

        &:focus {
            transition: all ease .4s;
            background-color: black;
            color: white;
        }
    }
`;
export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px 0px;
    margin-left: 25px;

    @media screen and (max-width: 414px) {
        grid-template-columns: repeat(1, 1fr);
        margin-left: 37px;
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }

    .naruto-box {
        display: inline-block;
        flex-direction: column;
        background-color: #363636;
        width: 300px;
        height: 540px;
        margin: 20px;
        border-radius: 10px;

        &:hover {
            transition: all ease .3s;
            border: 3px solid #f9f9f9;
            background-color: #FF4500;
            color: black;
        }


        img {
            height: 250px;
            width: 300px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        p {
            color: white;
            margin: 20px;

            &:hover {
                color: black;
            }
        }
    }
`;