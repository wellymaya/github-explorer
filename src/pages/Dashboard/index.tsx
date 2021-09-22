import React from "react";
import {Title, Form} from './styles'
import logoImg from '../../assets/logo.svg';


const Dashboard: React.FC = () => {
    return (
    <>
        <img src ={logoImg} alt="Github Explorer" />
        <Title>Explore github Repositories</Title>

        <Form >
            <input placeholder="Type Here the repository name: "></input>
            <button>Find</button>
        </Form>
    </>
    );

}

export default Dashboard;
