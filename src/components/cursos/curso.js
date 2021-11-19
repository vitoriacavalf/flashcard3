import React from "react";

import {Link, useNavigate} from "react-router-dom";

import api from "../../service/api"

const Curso = (props) => {
  const navigate = useNavigate();

  const handlerExcluir = (e) => {
    e.preventDefault();

    if( window.confirm("Deseja excluir " + props.course.colecaoId + "?")){
      api.delete("/" + props.course.colecaoId)
        .then( () => navigate(0));
    }
  }
  return (
      <div class="col s3">  
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" alt="" src= "https://materializecss.com/images/sample-1.jpg" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{props.course.nome}<i class="material-icons right">more_vert</i></span>
            <p><Link to={"/editar/" + props.course.colecaoId}>Editar</Link> | <a href="#" onClick={handlerExcluir}>Deletar</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Description<i class="material-icons right">close</i></span>
            <p>{props.course.descricao}</p>
          </div>
        </div>
      </div>
  );
};

export default Curso;