import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../Api/api";
import { Container, Content } from "./styles";

export const Characters = () => {
    const { name } = useParams();

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        api.get(`/characters/${name}`)
        .then((response) => response.data)
        .then((data) => setRepos(data));
    }, [])

    const convert = repos.images ?? [];
    const array = convert[0]
    

    return (
        <Container>
            <Content>
                {Array(repos).map((repos) => (
                    <div className="naruto-characters" key={repos.id}>
                        <img src={array} />
                        <h1>{repos.name}</h1>
                        <a href={repos.page}>
                            <button>Historia de {repos.name}</button>
                        </a>
                    </div>  
                ))}
            </Content>
        </Container>
    )
}