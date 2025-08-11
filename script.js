const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No divisional quem leva: [FER] ou [BFEsp]",
        alternativas: [
            {
                texto: "FER",
                afirmacao: "Com tudo o vencedor do divisional é o [BFEsp]"
            },
            {
                texto: "BFEsp",
                afirmacao: "Com tudo o vencedor do divisional é o [BFEsp]"
            }
        ]
    },
    {
        enunciado: "Com a descoberta que o [GENC-T] Kaneki etava de xit, o que vc achou disso? ",
        alternativas: [
            {
                texto: "Achei justo, muito bom.",
                afirmacao: ""
            },
            {
                texto: "Injusto, deve ser banido.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "E [CIE] e [CIGS] quem ganha.",
        alternativas: [
            {
                texto: "[CIE].",
                afirmacao: ""
            },
            {
                texto: "[CIGS].",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você jogou no divisional?",
        alternativas: [
            {
                texto: "Não.",
                afirmacao: ""
            },
            {
                texto: "Sim.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Acha o criador do divisional legal? ",
        alternativas: [
            {
                texto: "Sim.",
                airmacao:"."
            },

            {
                texto: "Não.",
                airmacao:"."
                
            },
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
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Final";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
