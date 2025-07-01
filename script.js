const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você gosta de animais?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Que bom "
            },
            {
                texto: "Não",
                afirmacao: "Que pena."
            }
        ]
    },
    {
        enunciado: "Qual sua cor favorita?",
        alternativas: [
            {
                texto: "Azul.",
                afirmacao: "escuro ou claro"
            },
            {
                texto: "Rosa",
                afirmacao: "escuro ou claro"
            }
        ]
    },
    {
        enunciado: "Qual sua estação favorita?",
        alternativas: [
            {
                texto: "Sol",
                afirmacao: "Praia"
            },
            {
                texto: "Chuva",
                afirmacao: "Dormir."
            }
        ]
    },
    {
        enunciado: "Gosta de ir para escola?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Que bom"
            },
            {
                texto: "Não.",
                afirmacao: "Que pena"
            }
        ]
    },
    {
        enunciado: "Você gosta de trabalho em grupo?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Que bom"
            },
            {
                texto: "Não",
                afirmacao: "Tudo bem!"
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
    }

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        // Check if the alternative has text, otherwise skip
        if (!alternativa.texto) continue;

        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
