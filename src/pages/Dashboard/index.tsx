import React from "react";
import {Title, Form, Repositories} from './styles'
import logoImg from '../../assets/logo.svg';
import {FiChevronRight} from 'react-icons/fi';


const Dashboard: React.FC = () => {
    return (
    <>
        <img src ={logoImg} alt="Github Explorer" />
        <Title>Explore github Repositories</Title>
        <Form >
            <input placeholder="Type the repository name here: "></input>
            <button>Find</button>
        </Form>
        <Repositories>
            <a href="#">
                <img src="https://avatars.githubusercontent.com/u/72640257?v=4" alt="" />
                <div>
                    <strong>RocketSeat</strong>
                    <p>lorem ipusm kjdidu-9.</p>
                </div>
                <FiChevronRight size={20}/>

            </a>
        </Repositories>
    </>
    );

}

export default Dashboard;
