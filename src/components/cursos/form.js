import React, { useState } from "react";
import { Row, Col, Input, Button, Card } from 'react-materialize'
import {NavLink} from 'react-router-dom'
import api from "../../service/api"

const Form = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const register = async () =>{
		await api.post("", {nome: name, descricao: description});
	}

    return (
        <Card>
            <Row>
                <Input placeholder="Nome curso..." 
                label="Nome curso" onChange={event => setName(event.target.value)} s={12} />

                <Input placeholder="Descrição curso..." 
                label="Descrição" onChange={event => setDescription(event.target.value)} s={12} />
                
                <Col s={12} m={12}>
                    <NavLink to="/cursos" >
                        <Button onClick={register} waves='light' className="right grey darken-2">Adicionar</Button>
                    </NavLink>
                </Col>
            </Row>
        </Card>
    );
}

export default Form;