start();

function quantasCartas(){
    let condicao = true;
    while(condicao==true){
        let numCartas = prompt('Quantas cartas deseja jogar?\nmín de 4 e máx de 14');
        if(numCartas>=4 && numCartas<=14){
            if(numCartas % 2 != 0){
                alert('Número inválido!\nDigite um número par!');
                continue;
            }else{
                condicao = false;
                return numCartas;
            }
        }else{
            alert('Número inválido!\nDigite um número de 4 a 14!')
        }
    }
}

function start(){
    let numCartas = quantasCartas();
    let arr = [];
    embaralhandoCartas(numCartas,arr);
    arr.sort(comparador);
    comecarJogo(arr);
}

function embaralhandoCartas(numCartas,arr){
    let img = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif'];
    let i = 0;
    while(numCartas > 0){
        let carta = `<div class="cartas">
            <a class="cartas__clicadas" onclick="tentativas(this)">
            <div class="backface face">
                <img class="carta" src="./imgs/front-1.png" width="100px" height="100px">
            </div>
            <div class="frontface face">
                <img src="./imgs/${img[i]}" width="100px" height="100px">
            </div>
        </a>
        </div>`;
        arr.push(carta); 
        arr.push(carta);
        i++;
        numCartas-=2;
    }
}

function comecarJogo(arr){
    console.log(arr);
    let cartas = document.querySelector('.game');
    console.log(cartas);
    for(let i=0;i<arr.length;i++){
        cartas.innerHTML += arr[i];
    }
}

function comparador(){
    return Math.random() - 0.5;
}

let cartasClicadas = [];

function tentativas(carta){
    if(document.querySelectorAll('.cartas__rotate__front').length % 2 == 0){
        carta.children[1].classList.add('cartas__rotate__front');
        carta.children[0].classList.add('cartas__rotate__back');
        carta.classList.add('carta__clicada');
        cartasClicadas.push(carta.children[1].children[0].src);
        carta.disabled=true;
    }else{
        carta.children[1].classList.add('cartas__rotate__front');
        carta.children[0].classList.add('cartas__rotate__back');
        cartasClicadas.push(carta.children[1].children[0].src);
        if(cartasClicadas[0]===cartasClicadas[1]){
            cartasClicadas = [];
            document.querySelector('.carta__clicada').disabled=true;
            carta.disabled=true;
        }else{
            setTimeout(() => {
                carta.children[1].classList.remove('cartas__rotate__front');
                carta.children[0].classList.remove('cartas__rotate__back');
                document.querySelector('.carta__clicada').children[0].classList.remove('cartas__rotate__back');
                document.querySelector('.carta__clicada').children[1].classList.remove('cartas__rotate__front');
                document.querySelector('.carta__clicada').classList.remove('carta__clicada');
                cartasClicadas=[];
            },1000);
            
        }
    }
}