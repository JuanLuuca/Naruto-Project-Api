import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../Api/api";
import { Container, Content } from "./styles";

export const Home = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        api.get(`/characters`)
        .then(response => response.data)
        .then(data => setRepos(data))
  }, [])

    return (
        <Container>
            <Content>
                {repos.map((repos, index) => ( 
                    <Link to={`/characters/${repos.id}`}>
                        <div key={index}>
                            <div className="naruto-box">
                                <img src={repos.images[0]} />
                                <p>Nome: {repos.name}</p>
                                <p>Idade: {repos.info.Idade =! repos.info.Idade ? 'indefinido' : repos.info.Idade}</p>
                                <p>Altura: {repos.info.Altura =! repos.info.Altura ? 'indefinido' : repos.info.Altura}</p>
                                <p>Cargo: {repos.info.Opupação =! repos.info.Ocupação ? 'indefinido' : repos.info.Ocupação}</p>
                                <p>Patente Ninja: {repos.info['Patente Ninja'] =! repos.info['Patente Ninja'] ? 'indefinido' : repos.info['Patente Ninja']}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </Content>
        </Container>
    )
}