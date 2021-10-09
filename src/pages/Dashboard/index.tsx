import React,{useState, useEffect, FormEvent, useContext} from "react";
import {Link} from 'react-router-dom'
import {Title, Form, Repositories, Error} from './styles'
import {FiChevronRight} from 'react-icons/fi';


import api from "../../services/api";

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;

    };
}

const Dashboard: React.FC = () => {

    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplore:repositories');

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        }else{
            return [];
        }
    });


    useEffect(()=> {
        localStorage.setItem('@GithubEplorer:repositories', JSON.stringify(repositories));
    }, [repositories]);

    async function handleAddRepository (
        event:FormEvent<HTMLFormElement>,
        ): Promise<void> {

            event.preventDefault();

            if (!newRepo) {
                setInputError('Type the author/name of repository');
            }

            try {
                const response = await api.get<Repository>(`repos/${newRepo}`);

                const repository = response.data;

                setRepositories([...repositories, repository]);
                setNewRepo('');
                setInputError('');

            } catch (err) {
                setInputError('Failed to fetch repository')
            }

        //add a new repository
        //consume the API from github
        //save new repository in state


    }

    const slide = {
        show: {
            x: 0,
            opacity: 1,
            scale: 1       },
        hide: {
            x: -50,
            opacity: 0,
            scale: 0

        },
        initial: {
            x: 100,
            opacity: 0

        }
    }


    return (

    <>

        <Title
>Explore github Repositories</Title>


        <Form
        variants={slide} initial='initial' animate='show'

        hasError={!! inputError} onSubmit = {handleAddRepository}>
            <span>Type the author/repository name:</span>


            <input
            value= {newRepo}
            onChange  ={(e) => setNewRepo(e.target.value)}
            placeholder="Ex: facebook/react "
            />
            <button type="submit">Search</button>
        </Form>

        { inputError && <Error> {inputError} </Error> }

        <Repositories>
            {repositories.map( repository => (
                <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                    <img
                    src={repository.owner.avatar_url}
                    alt={repository.owner.login}
                    />
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>
                    <FiChevronRight size={20}/>
                </Link>
            ))}
        </Repositories>
    </>
    );

}

export default Dashboard;
