import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { api } from "../../Api/api";
import { Container, Content } from "./styles";

export const Home = () => {
    const [repos, setRepos] = useState([]);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        const NarutoApi = async () => {
            const response = await api.get(`/characters`);
            const data = response.data
            setRepos(data);
        }
        NarutoApi();
    }, [api])

    return (
        <Container>
            <div className="input-search">
                <input
                    type="text" 
                    placeholder="Pesquise um ninja"
                    onChange={(e) => setBusca(e.target.value)}
                />
            </div>
            <Content>
                {repos.filter((user) => 
                    user.name.toLowerCase().includes(busca)
                ).map((repos) => ( 
                    <Link to={`/characters/${repos.id}`}>
                        <div key={repos.id}>
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