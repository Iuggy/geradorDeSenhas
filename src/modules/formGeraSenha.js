import geraSenha from './geradores';
const senhaGerada = document.querySelector('.senha-gerada');
const qntdCaracteres = document.querySelector('.qntd-caract');
const chkMaiscula = document.querySelector('.check-mais');
const chkMinuscula = document.querySelector('.check-min')
const  chkNum = document.querySelector('.check-num')
const chkSimbol = document.querySelector('.check-simb')
const gerarSenha = document.querySelector('.gerar-senha')

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    }) 
};
function gera() {
    const senha = geraSenha(qntdCaracteres.value,
        chkMaiscula.checked,
        chkMinuscula.checked,
        chkNum.checked,
        chkSimbol.checked
        );
        if(qntdCaracteres.value < 8 || qntdCaracteres.value > 20){
           return'Tamanho da senha Inválido'
        }else{
        return senha || 'Nada Selecionado';}
}