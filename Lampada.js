const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function Verifica(){
    return lamp.src.indexOf ('Quebrada') > -1

}

function lampOn () {
    if (!Verifica ()){
    lamp.src = './img/LampadaAcessa.jpg';

    }
}

function lampOff() {
    if (!Verifica ()){
    lamp.src= './img/LampadaApagada.jpg';

    }
}

function lampQuebra(){
    lamp.src= './img/LampadaQuebrada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampQuebra);


