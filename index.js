const resultado = document.getElementById('result');
const um = document.getElementById('1');
const dois = document.getElementById('2');
const tres = document.getElementById('3');
const quatro = document.getElementById('4');
const cinco = document.getElementById('5');
const seis = document.getElementById('6');
const sete = document.getElementById('7');
const oito = document.getElementById('8');
const nove = document.getElementById('9');
const zero = document.getElementById('0');
const mais = document.getElementById('+');
const menos = document.getElementById('-');
const vezes = document.getElementById('x');
const dividir = document.getElementById('/');
const igual = document.getElementById('=');
const C = document.getElementById('C');
const ponto = document.getElementById('.');

// mostrar número no display
function insert(num) {
    if (resultado.innerHTML === '0') {
        resultado.innerHTML = num;
    } else {
        resultado.innerHTML += num;
    }
}

// colocar o valor dos botões
um.addEventListener('click', () => insert('1'))
dois.addEventListener('click', () => insert('2'))
tres.addEventListener('click', () => insert('3'))
quatro.addEventListener('click', () => insert('4'))
cinco.addEventListener('click', () => insert('5'))
seis.addEventListener('click', () => insert('6'))
sete.addEventListener('click', () => insert('7'))
oito.addEventListener('click', () => insert('8'))
nove.addEventListener('click', () => insert('9'))
zero.addEventListener('click', () => insert('0'))
ponto.addEventListener('click', () => insert('.'))

// limpar o resultado
function limpar() {
    resultado.innerHTML = '0';
}

C.addEventListener('click', limpar);

// operações
function operacao(op) {
    resultado.innerHTML += ' ' + op + ' ';
}

mais.addEventListener('click', () => operacao('+'));
menos.addEventListener('click', () => operacao('-'));
vezes.addEventListener('click', () => operacao('x'));
dividir.addEventListener('click', () => operacao('/'));

// calcular o resultado
function calculo() {
    const digito = resultado.innerHTML.split(' ');
    if (digito.length === 3) {
        const primeiroNum = parseFloat(digito[0]);
        const operador = digito[1];
        const segundoNum = parseFloat(digito[2]);
        let result;
        switch (operador) {
            case '+':
                result = primeiroNum + segundoNum;
                break;
            case '-':
                result = primeiroNum - segundoNum;
                break;
            case 'x':
                result = primeiroNum * segundoNum;
                break;
            case '/':
                result = primeiroNum / segundoNum;
                break;
            default:
                return;
        }
        resultado.innerHTML = result;
    }
}

igual.addEventListener('click', calculo);

