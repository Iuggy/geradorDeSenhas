const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65,91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNum = () => String.fromCharCode(rand(48,58));
const simb = '.,;?/~^][}{=-+_!@#$%¨&*"|';
const geraSimb = () => simb[rand(0, simb.length)]

export default function geraSenha(qntd, maiusculas, minusculas, numeros, simbolos){
    const senhaArray = [];
    qntd = Number(qntd);
    
    
    for(let i = 0; i < qntd; i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNum())
        simbolos && senhaArray.push(geraSimb())
    }
    return senhaArray.join('').slice(0, qntd);

}