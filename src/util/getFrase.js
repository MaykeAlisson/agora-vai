const frases = [
  "Até as torres mais altas começaram do chão.",
  "Uma pessoa só está sentada em uma sombra hoje porque outra plantou uma árvore tempos atrás.",
  "O sucesso é alcançado e mantido por aqueles que não desistem.",
  "Insista, persista e jamais desista daquilo que faz seus olhos brilharem!",
  "Com determinação e foco no sucesso todos os sonhos vão se realizar.",
  "O segredo do sucesso é a constância de objetivo.",
  "Nenhum obstáculo é tão grande se a sua vontade de vencer for maior.",
  "Você só vence amanhã se não desistir hoje.",
  "Se você quer vencer, não fique olhando a escada. Comece a subir, degrau por degrau, até chegar ao topo.",
  "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência",
  "Sei que estou no caminho do sucesso porque tudo deixou de ser fácil.",
  "Paciência, persistência e esforço são uma combinação imbatível para alcançar o sucesso.",
  "Coragem é a resistência e o domínio do medo, não a ausência dele.",
  "De um certo ponto em diante não há mais volta. É esse ponto que deve ser alcançado.",
  "Eu quero, eu posso, eu consigo!",
  "Não fale o seu preço antes do cliente entender o seu valor.",
  "Não existe derrota para quem estuda. Ou vence, ou aprende!",
  "Você só vai falhar quando desistir de tentar.",
  "Seja mais sábio do que as outras pessoas, mas nunca diga isso à elas.",
  "Nem sempre você estará motivada. Então, aprenda a ser disciplinada.",
];

const getFrase = () => {
  return frases[Math.floor(Math.random() * frases.length)];
};

export default getFrase();
