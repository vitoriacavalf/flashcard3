import React, { useState } from "react";

import { Row, Col, Input, Button, Card } from 'react-materialize'

import { NavLink, useParams } from 'react-router-dom'

import api from "../../service/api"

const Editar = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const {colecaoId} = useParams('');

    const editar = async () =>{
		await api.put("/" + colecaoId, {nome: name, descricao: description})
        .then(response => setDescription(response.data))
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
                        <Button onClick={editar} waves='light' className="right grey darken-2">Editar</Button>
                    </NavLink>
                </Col>
            </Row>
        </Card>
    );
}

export default Editar;