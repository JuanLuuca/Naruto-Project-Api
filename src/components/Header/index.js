import React from "react";
import { Container } from "./styles";
import narutoimg from '../../assets/narutologo.png';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <Container>
            <Link to ="/">
                <img src={narutoimg} alt="" />
            </Link>
        </Container>
    )
}