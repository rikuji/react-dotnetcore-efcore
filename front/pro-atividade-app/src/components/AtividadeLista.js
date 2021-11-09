import React from "react";
import Atividade from "./Atividade";

export default function AtividadeLista(props) {
  return (
    <div className="mt-3">
      <ul className="list-group">
        {props.atividades.map((atividade) => (
          <Atividade
            key={atividade.id}
            atividade={atividade}
            handleConfirmModal={props.handleConfirmModal}
            pegarAtividade={props.pegarAtividade}
          />
        ))}
      </ul>
    </div>
  );
}
