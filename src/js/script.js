setInterval(() => {
    document.location.reload(true);
}, 30000);

const containers = document.querySelectorAll('.container')
const numeros = document.querySelectorAll('.numero')
const moldes = document.querySelectorAll('.molde')
const painel = document.querySelectorAll('.painel')
const motivo = document.querySelectorAll('.motivo')

const manutencao = ['Defeito de Casa de Maq', 'Manut Preventiva', 'Manut Mec Máquina', 'Manut Elet Máquina', 'Instalação de Maq', 'Falta de Água '];
const processo = ['Regulagem de Maq', 'Setup', 'Teste e Amostra', 'Regulagem de Robô'];
const pcp = ['Falta de Insumo', 'Falta de Venda', 'Decisão do PCP', 'Almoxarifado'];
const producao = ['Falta de Operador', 'Limpeza de Maq', 'Organização e 5s'];
const ferramentaria = ['Manut Mec Molde', 'Manut Ele Molde', 'Ajuste de Saida de Gás'];
const materiaPrima = ['Falta de Material', 'Defeito de Material'] ;
const qualidade = ['Decisão do CQ'];
const paradas = [manutencao, pcp, producao, processo, ferramentaria, materiaPrima, qualidade]

function aleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function paradaAleatoria() {
    let indice1 = paradas[aleatorio(0, 6)]
    return indice1
}

let indice1 = paradaAleatoria()
let indice2 = paradaAleatoria()
let indice3 = paradaAleatoria()
let indice4 = paradaAleatoria()
let indice5 = indice1[aleatorio(0,indice1.length-1)]
let indice6 = indice2[aleatorio(0,indice2.length-1)]
let indice7 = indice3[aleatorio(0,indice3.length-1)]
let indice8 = indice4[aleatorio(0,indice4.length-1)]

const m51 =   { numero: 51,   oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice5, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m104 =  { numero: 104,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice2, parada: indice6, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m105 =  { numero: 105,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice3, parada: indice7, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m106 =  { numero: 106,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice4, parada: indice8, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m107 =  { numero: 107,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice5, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m108 =  { numero: 108,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice2, parada: indice6, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m202 =  { numero: 202,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice3, parada: indice7, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m203 =  { numero: 203,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice4, parada: indice8, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m204 =  { numero: 204,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice5, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m205 =  { numero: 205,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice2, parada: indice6, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m206 =  { numero: 206,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice3, parada: indice7, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m207 =  { numero: 207,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice4, parada: indice8, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m208 =  { numero: 208,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice5, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m209 =  { numero: 209,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice2, parada: indice6, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m210 =  { numero: 210,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice3, parada: indice7, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m211 =  { numero: 211,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice4, parada: indice8, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m212 =  { numero: 212,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice5, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m213 =  { numero: 213,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice2, parada: indice6, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m214 =  { numero: 214,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice3, parada: indice7, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m230 =  { numero: 230,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice4, parada: indice8, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m252 =  { numero: 252,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice5, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m253 =  { numero: 253,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice2, parada: indice6, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m260 =  { numero: 260,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice3, parada: indice7, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m302 =  { numero: 302,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice4, parada: indice8, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m303 =  { numero: 303,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice5, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m451 =  { numero: 451,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice2, parada: indice6, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m452 =  { numero: 452,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice3, parada: indice7, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m531 =  { numero: 531,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice4, parada: indice8, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m604 =  { numero: 604,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice5, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m701 =  { numero: 701,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice2, parada: indice6, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m802 =  { numero: 802,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice3, parada: indice7, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m803 =  { numero: 803,  oee: aleatorio(93, 107), status: aleatorio(0, 11), setorDaParada: indice4, parada: indice8, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m1000 = { numero: 1000, oee: aleatorio(94, 107), status: aleatorio(0, 11), setorDaParada: indice1, parada: indice5, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }
const m1080 = { numero: 1080, oee: aleatorio(94, 107), status: aleatorio(0, 11), setorDaParada: indice2, parada: indice6, molde: '123P', programado: aleatorio(2000, 2200), produzido: aleatorio(100, 2300) }

let numerosDasMaquinas = [
    m51.numero,
    m104.numero,
    m105.numero,
    m106.numero,
    m107.numero,
    m108.numero,
    m202.numero,
    m203.numero,
    m204.numero,
    m205.numero,
    m206.numero,
    m207.numero,
    m208.numero,
    m209.numero,
    m210.numero,
    m211.numero,
    m212.numero,
    m213.numero,
    m214.numero,
    m230.numero,
    m252.numero,
    m253.numero,
    m260.numero,
    m302.numero,
    m303.numero,
    m451.numero,
    m452.numero,
    m531.numero,
    m604.numero,
    m701.numero,
    m802.numero,
    m803.numero,
    m1000.numero,
    m1080.numero,
]
let oeeDasMaquinas = [
      m51.oee,
     m104.oee,
     m105.oee,
     m106.oee,
     m107.oee,
     m108.oee,
     m202.oee,
     m203.oee,
     m204.oee,
     m205.oee,
     m206.oee,
     m207.oee,
     m208.oee,
     m209.oee,
     m210.oee,
     m211.oee,
     m212.oee,
     m213.oee,
     m214.oee,
     m230.oee,
     m252.oee,
     m253.oee,
     m260.oee,
     m302.oee,
     m303.oee,
     m451.oee,
     m452.oee,
     m531.oee,
     m604.oee,
     m701.oee,
     m802.oee,
     m803.oee,
    m1000.oee,
    m1080.oee,
]

let moldesDasMaquinas = [
    m51.molde,
   m104.molde,
   m105.molde,
   m106.molde,
   m107.molde,
   m108.molde,
   m202.molde,
   m203.molde,
   m204.molde,
   m205.molde,
   m206.molde,
   m207.molde,
   m208.molde,
   m209.molde,
   m210.molde,
   m211.molde,
   m212.molde,
   m213.molde,
   m214.molde,
   m230.molde,
   m252.molde,
   m253.molde,
   m260.molde,
   m302.molde,
   m303.molde,
   m451.molde,
   m452.molde,
   m531.molde,
   m604.molde,
   m701.molde,
   m802.molde,
   m803.molde,
  m1000.molde,
  m1080.molde,
]

let paradasDasMaquinas = [
    m51.parada,
   m104.parada,
   m105.parada,
   m106.parada,
   m107.parada,
   m108.parada,
   m202.parada,
   m203.parada,
   m204.parada,
   m205.parada,
   m206.parada,
   m207.parada,
   m208.parada,
   m209.parada,
   m210.parada,
   m211.parada,
   m212.parada,
   m213.parada,
   m214.parada,
   m230.parada,
   m252.parada,
   m253.parada,
   m260.parada,
   m302.parada,
   m303.parada,
   m451.parada,
   m452.parada,
   m531.parada,
   m604.parada,
   m701.parada,
   m802.parada,
   m803.parada,
  m1000.parada,
  m1080.parada,
]

let statusDasMaquinas = [
    m51.status,
   m104.status,
   m105.status,
   m106.status,
   m107.status,
   m108.status,
   m202.status,
   m203.status,
   m204.status,
   m205.status,
   m206.status,
   m207.status,
   m208.status,
   m209.status,
   m210.status,
   m211.status,
   m212.status,
   m213.status,
   m214.status,
   m230.status,
   m252.status,
   m253.status,
   m260.status,
   m302.status,
   m303.status,
   m451.status,
   m452.status,
   m531.status,
   m604.status,
   m701.status,
   m802.status,
   m803.status,
  m1000.status,
  m1080.status,
]

let setorDasMaquinas = [
    m51.setorDaParada,
   m104.setorDaParada,
   m105.setorDaParada,
   m106.setorDaParada,
   m107.setorDaParada,
   m108.setorDaParada,
   m202.setorDaParada,
   m203.setorDaParada,
   m204.setorDaParada,
   m205.setorDaParada,
   m206.setorDaParada,
   m207.setorDaParada,
   m208.setorDaParada,
   m209.setorDaParada,
   m210.setorDaParada,
   m211.setorDaParada,
   m212.setorDaParada,
   m213.setorDaParada,
   m214.setorDaParada,
   m230.setorDaParada,
   m252.setorDaParada,
   m253.setorDaParada,
   m260.setorDaParada,
   m302.setorDaParada,
   m303.setorDaParada,
   m451.setorDaParada,
   m452.setorDaParada,
   m531.setorDaParada,
   m604.setorDaParada,
   m701.setorDaParada,
   m802.setorDaParada,
   m803.setorDaParada,
  m1000.setorDaParada,
  m1080.setorDaParada,
]

let progDasMaquinas = [
    m51.programado,
   m104.programado,
   m105.programado,
   m106.programado,
   m107.programado,
   m108.programado,
   m202.programado,
   m203.programado,
   m204.programado,
   m205.programado,
   m206.programado,
   m207.programado,
   m208.programado,
   m209.programado,
   m210.programado,
   m211.programado,
   m212.programado,
   m213.programado,
   m214.programado,
   m230.programado,
   m252.programado,
   m253.programado,
   m260.programado,
   m302.programado,
   m303.programado,
   m451.programado,
   m452.programado,
   m531.programado,
   m604.programado,
   m701.programado,
   m802.programado,
   m803.programado,
  m1000.programado,
  m1080.programado,
]

let prodDasMaquinas = [
    m51.produzido,
   m104.produzido,
   m105.produzido,
   m106.produzido,
   m107.produzido,
   m108.produzido,
   m202.produzido,
   m203.produzido,
   m204.produzido,
   m205.produzido,
   m206.produzido,
   m207.produzido,
   m208.produzido,
   m209.produzido,
   m210.produzido,
   m211.produzido,
   m212.produzido,
   m213.produzido,
   m214.produzido,
   m230.produzido,
   m252.produzido,
   m253.produzido,
   m260.produzido,
   m302.produzido,
   m303.produzido,
   m451.produzido,
   m452.produzido,
   m531.produzido,
   m604.produzido,
   m701.produzido,
   m802.produzido,
   m803.produzido,
  m1000.produzido,
  m1080.produzido,
]

console.log(prodDasMaquinas);
console.log(progDasMaquinas);

let indice = 1

setInterval(() => {
    for (let index = 0; index < containers.length; index++) {
        let item1 = 'Oee: '+oeeDasMaquinas[index]+'%'
        let item2 = 'Prog: '+progDasMaquinas[index]
        let item3 = 'Prod: '+prodDasMaquinas[index]
        let itens = [item1,item2,item3]
        painel[index].innerHTML = itens[indice]
        if (indice == itens.length - 1) {
            indice = 0
        }else{
            indice++
        }
    }
    
}, 3000);




for (let index = 0; index < containers.length; index++) {
    numeros[index].innerHTML = numerosDasMaquinas[index]
    moldes[index].innerHTML = moldesDasMaquinas[index]
    painel[index].innerHTML = 'Oee: '+oeeDasMaquinas[index]+'%'
    motivo[index].innerHTML = paradasDasMaquinas[index]
}

for (let index = 0; index < containers.length; index++) {
    if (statusDasMaquinas[index] <= 9){
        motivo[index].innerHTML = ''
        if(oeeDasMaquinas[index] < 95){
            if (prodDasMaquinas[index] === progDasMaquinas[index] - 100 || prodDasMaquinas[index] > progDasMaquinas[index] ) {
                containers[index].classList.add('fim-de-producao-fora-de-ciclo')    
            }else{
                containers[index].classList.add('acima-do-ciclo')    
            }
        }else if(oeeDasMaquinas[index] > 105){
            if (prodDasMaquinas[index] === progDasMaquinas[index] - 100 || prodDasMaquinas[index] > progDasMaquinas[index] ) {
                containers[index].classList.add('fim-de-producao-abaixo-de-ciclo')    
            }else{
                containers[index].classList.add('abaixo-do-ciclo')    
            }
        }else{
            if (prodDasMaquinas[index] === progDasMaquinas[index] - 100 || prodDasMaquinas[index] > progDasMaquinas[index] ) {
                containers[index].classList.add('fim-de-producao')    
            }else{
                containers[index].classList.add('dentro-do-ciclo')    
            }
        }
    }else{
        if(paradasDasMaquinas[index] === 'Setup'){
            containers[index].classList.add('setup')    
        }else if(paradasDasMaquinas[index] === 'Teste e Amostra'){
            containers[index].classList.add('teste')

        }else if(setorDasMaquinas[index] === processo){
            containers[index].classList.add('regulagem')

        }else if(setorDasMaquinas[index] === materiaPrima){
            containers[index].classList.add('materia')

        }else if(setorDasMaquinas[index] === ferramentaria){
            containers[index].classList.add('ferramentaria')

        }else if(setorDasMaquinas[index] === pcp){
            containers[index].classList.add('pcp')

        }else if(setorDasMaquinas[index] === manutencao){
            containers[index].classList.add('manutencao')

        }else if(setorDasMaquinas[index] === producao){
            containers[index].classList.add('producao')

        }else if(setorDasMaquinas[index] === qualidade){
            containers[index].classList.add('cq')

        }
        

    }
}