import React from "react";

import { Row } from 'react-materialize';

import { NavLink } from "react-router-dom";

import Curso from "./curso";


const Cursos = (props) => {
  return (
    <Row>
          <h5>Cursos</h5>

          <NavLink to="/adicionar"><a class="grey waves-effect waves-light btn">Adicionar</a></NavLink>

        <br/>
          {props.coursesData.map(course => (
          <Curso 
            course={course} />
          ))}

    </Row>
  )
};

export default Cursos;