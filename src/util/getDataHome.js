import Mes from "./Mes";
import DiaSemana from "./DiaSemana";

const getDataHome = () => {
  const diaSemana = DiaSemana[new Date().getDay()];
  const dia = new Date().getDate();
  const mes = Mes[new Date().getMonth() + 1];
  const ano = new Date().getFullYear();

  return `${diaSemana} ${dia} de ${mes} de ${ano}`;

};

export default getDataHome();
