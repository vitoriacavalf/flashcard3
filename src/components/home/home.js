// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

const Home = () => ( 
  <Row>
    <Col m={11} s={11}>
        <h5 className="subtitle">Sobre o site</h5>
        <Card>
          <div>
            <p><b>Objetivo</b></p>
            <p>O objetivo desse site é ajudar os alunos que desejam aprimorar seus conhecimentos em determinadas matérias, ajudando na fixação da matéria para provas e vestibulares nas quais o aluno em questão venha a participar.</p>
            <br/>
            <p><b>Método</b></p>
            <p>Para realizar isso, escolhemos o uso de Flashcards, um método que facilita o aprendizado do aluno, fazendo com que o estudante grave os assuntos com mais facilidade.</p>
            <br/>
            
          </div>
        </Card>
    </Col>
  </Row>
);

export default Home;