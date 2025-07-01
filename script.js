const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você já montou em um cavalo?",
        alternativas: [
            {
                texto: "Sim, é incrível!",
                afirmacao: "Você adora cavalos."
            },
            {
                texto: "Não, nunca tentei.",
                afirmacao: "Quem sabe um dia você tenta!"
            }
        ]
    },
    {
        enunciado: "Qual raça de cavalo você mais gosta?",
        alternativas: [
            {
                texto: "Puro Sangue Árabe",
                afirmacao: "Uma raça elegante e veloz!"
            },
            {
                texto: "Cavalo de Trabalho",
                afirmacao: "Muito resistente e forte!"
            }
        ]
    },
    {
        enunciado: "Você prefere cavalos grandes ou pequenos?",
        alternativas: [
            {
                texto: "Grandes, imponentes!",
                afirmacao: "Cavalos grandes têm uma presença impressionante."
            },
            {
                texto: "Pequenos, ágeis!",
                afirmacao: "Cavalos pequenos são rápidos e divertidos."
            }
        ]
    },
    {
        enunciado: "Qual cor de cavalo você acha mais bonita?",
        alternativas: [
            {
                texto: "Preto",
                afirmacao: "Elegância pura!"
            },
            {
                texto: "Baio (marrom)",
                afirmacao: "Uma cor clássica e charmosa."
            }
        ]
    },
    {
        enunciado: "Você gostaria de ter um cavalo?",
        alternativas: [
            {
                texto: "Sim, adoraria!",
                afirmacao: "Com um cavalo, você teria uma ótima companhia."
            },
            {
                texto: "Não, não sou muito fã.",
                afirmacao: "Cavalos não são para todos, tudo bem!"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];

    // Skip empty questions
    if (!perguntaAtual.enunciado) {
        atual++;
        mostraPergunta();
        return;
