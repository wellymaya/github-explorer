import React, {useEffect} from "react";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link, useRouteMatch} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import api, {} from '../../services/api'


interface RepositoryParams {
    repository: string;
}

interface RepositoryI {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count:number;
    owner: {
        login: string;
        avatar_url: string;

    };
}

interface Issue {
    title:string;
    id: number;
    html_url: string;
    user: {
        login:string;
    }
}

import {Header, RepositoryInfo, Issues} from './styles'

const Repository: React.FC = () => {
    const [repository, setRepository] = useState <RepositoryI | null>(null);
    const [issues, setIssues] = useState <Issue[]>([]);

    const {params} = useRouteMatch<RepositoryParams>();

    useEffect(()=> {
        api.get(`repos/${params.repository}`).then((response) => {
            setRepository(response.data);
        });

        api.get(`repos/${params.repository}/issues`).then((response) => {
            setIssues(response.data)
        })


    }, [params.repository]);

    return (
        <>
        <Header>
            <img src={logoImg}/>
            <Link to="/">
                <FiChevronLeft size={16}/>
                Voltar
            </Link>
        </Header>

        { repository &&(
            <RepositoryInfo>
                <header>
                    <img
                    src={repository.owner.avatar_url}
                    alt= {repository.owner.login}
                    />

                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>{repository.stargazers_count}</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>{repository.forks_count}</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>{repository.open_issues_count}</strong>
                        <span>Issues Abertas</span>

                    </li>
                </ul>
        </RepositoryInfo>
        )}

        <Issues>
            {issues.map(issue => (
                <a key={issue.id} href={issue.html_url}>
                    <div>
                        <strong>{issue.title}</strong>
                        <p>{issue.user.login}</p>
                    </div>

                    <FiChevronRight size ={20} />
                </a>
            )
            )}
        </Issues>
        </>
        );

}

export default Repository;
