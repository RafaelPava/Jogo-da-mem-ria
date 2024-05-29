/*let condicao = true;
function quantasCartas(){
    while(condicao==true){
        let numCartas = prompt('Quantas cartas deseja jogar?\nmín de 2 e máx de 14');
        if(numCartas % 2 != 0){
            alert('Número inválido!\nDigite um número par!');
            continue;
        }else{
            condicao = false;
            return numCartas;
        }
    }
}

let numCartas = quantasCartas();

function embaralhandoCartas(){
    let contador = 1;
    let i = 0;
    let arr = [];
    while(numCartas > 0){
        let cartas = document.querySelectorAll('.cartas')[i];
        arr.push(cartas); 
        if(contador%6!=0){
            numCartas--;
            contador++;
            continue;
        }else{
            i++;
            cartas = document.querySelectorAll('.cartas')[i];
            arr.push(cartas);
            contador++;
        }
        numCartas--;
    }
}

arr.sort(comparador);

function comecarJogo(){
    for(let i=0;i<arr.length;i++){
        arr[i].innerHTML = `<a class="cartas__clicadas" onclick="tentaivas()">
            <div class="carta__background">
                <img class="carta" src="./imgs/front-1.png" width="100px" height="100px">
            </div>
        </a>`;
    }
}

function comparador(){
    return Math.random() - 0.5;
}*/