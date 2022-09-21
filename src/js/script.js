const containerPrincipal = document.getElementById('main')

const manutencao = ['Defeito de Casa de Maq', 'Manut Preventiva', 'Manut Mec Máquina', 'Manut Elet Máquina', 'Instalação de Maq', 'Falta de Água '];
const processo = ['Regulagem de Maq', 'Setup', 'Teste e Amostra', 'Regulagem de Robô'];
const pcp = ['Falta de Insumo', 'Falta de Venda', 'decisão do PCP', 'Almoxarifado'];
const producao = ['Falta de Operador', 'Limpeza de Maq', 'Organização e 5s'];
const ferramentaria = ['Manut Mec Molde', 'Manut Ele Molde', 'Ajuste de Saida de Gás'];
const materiaPrima = ['Falta de Material', 'Defeito de Material'];
const qualidade = ['Decisão do CQ'];
const paradas = [manutencao, pcp, producao, processo, ferramentaria, materiaPrima, qualidade]


function paradaAleatoria() {
    let indice1 = paradas[aleatorio(0, paradas.length - 1)]
    return indice1
}

let indice1 = paradaAleatoria()
let indice2 = indice1[0, indice1.length - 1]

const m51 =   {   numero: 51, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m104 =   { numero: 104, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m105 =   { numero: 105, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m106 =   { numero: 106, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m107 =   { numero: 107, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m108 =   { numero: 108, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m202 =   { numero: 202, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m203 =   { numero: 203, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m204 =   { numero: 204, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m205 =   { numero: 205, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m206 =   { numero: 206, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m207 =   { numero: 207, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m208 =   { numero: 208, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m209 =   { numero: 209, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m210 =   { numero: 210, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m211 =   { numero: 211, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m212 =   { numero: 212, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m213 =   { numero: 213, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m214 =   { numero: 214, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m230 =   { numero: 230, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m252 =   { numero: 252, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m253 =   { numero: 253, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m260 =   { numero: 260, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m302 =   { numero: 302, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m303 =   { numero: 303, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m451 =   { numero: 451, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m452 =   { numero: 452, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m531 =   { numero: 531, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m604 =   { numero: 604, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m701 =   { numero: 701, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m802 =   { numero: 802, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m803 =   { numero: 803, oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m1000 = { numero: 1000, oee: aleatorio(94, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) }
const m1080 = { numero: 1080, oee: aleatorio(94, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice2, molde: '123P', programado: aleatorio(1500, 2200), produzido: aleatorio(1000, 2300) };

const maquinas = [m51, m104, m105, m106, m107, m108, m202, m203, m204, m205, m206, m207, m208, m209, m210, m211, m212, m213, m214, m230, m252, m253, m260, m302, m303, m451, m452, m531, m604, m701, m802, m803, m1000, m1080];

function criarContainer(indice) {

    let containerMaquina = document.createElement('div');
    containerMaquina.classList.add('container');

    let numeroMolde = document.createElement('div');
    let molde = document.createElement('h4');
    let numero = document.createElement('h2');


    numeroMolde.classList.add('numero-molde');
    numero.innerHTML = maquinas[indice].numero;
    molde.innerHTML = maquinas[indice].molde;

    let divRigth = document.createElement('div');
    divRigth.classList.add('div-rigth');

    let painelTEmpo = document.createElement('div');
    let painel = document.createElement('p');
    let tempo = document.createElement('h4');

    painelTEmpo.classList.add('div-painel');
    painel.innerHTML = 'Oee ' + maquinas[indice].oee + '%';
    tempo.innerHTML = '0h 00mn'

    let motivoParada = document.createElement('div');
    motivoParada.classList.add('motivo-da-parada');

    let motivo = document.createElement('h3');
    if (maquinas[indice].status <= 9) {
        motivo.innerHTML = ''
        if (maquinas[indice].oee < 95) {
            containerMaquina.classList.add('acima-do-ciclo')
        }else if (maquinas[indice].oee > 105) {
            containerMaquina.classList.add('abaixo-do-ciclo')
        }else{
            containerMaquina.classList.add('dentro-do-ciclo')
        }
        
    }else{
        motivo.innerHTML = maquinas[indice].parada
        console.log(maquinas[indice ].numero,maquinas[indice].setorDaParada,maquinas[indice].parada);
        console.log(motivo.innerHTML);
        if(maquinas[indice ].setorDaParada === processo){
            containerMaquina.classList.add('regulagem')
        }else if(maquinas[indice].setorDaParada === ferramentaria){
            containerMaquina.classList.add('ferramentaria')
        }else if(maquinas[indice].setorDaParada === qualidade){
            containerMaquina.classList.add('cq')
        }else if(maquinas[indice].setorDaParada === pcp){
            containerMaquina.classList.add('pcp')
        }else if(maquinas[indice].setorDaParada === materiaPrima){
            containerMaquina.classList.add('materia')
        }else if(maquinas[indice].setorDaParada === producao){
            containerMaquina.classList.add('producao')
        }else if(maquinas[indice].setorDaParada === manutencao){
            containerMaquina.classList.add('manutencao')
        }
    }

    incluirElemento(containerPrincipal, containerMaquina);

    incluirElemento(containerMaquina, numeroMolde)
    incluirElemento(numeroMolde, numero)
    incluirElemento(numeroMolde, molde)

    incluirElemento(containerMaquina, divRigth)
    incluirElemento(divRigth, painelTEmpo)
    incluirElemento(painelTEmpo, painel)
    incluirElemento(painelTEmpo, tempo)

    incluirElemento(divRigth, motivoParada)
    incluirElemento(motivoParada, motivo)

}

function incluirElemento(pai, filha) {
    pai.appendChild(filha);
}

function aleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

for (let index = 0; index < maquinas.length; index++) {
    criarContainer(index)

}


setInterval(() => {
    document.location.reload(true);
}, 5000);
