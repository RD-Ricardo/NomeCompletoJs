const primeiroNome = prompt("Digite seu primeiro nome");
const sobreNome = prompt("Digite seu sobrenome");

if(!primeiroNome ==  '' & primeiroNome.length > 3)
{
    alert(`Nome completo: ${primeiroNome} ${sobreNome}`);
    alert(`Nome de catálogo: ${sobreNome.toLocaleUpperCase()}, ${primeiroNome}`);
}else{
    alert("Os campos devem ser preenchidos e de no minimo 3 caracteres");
}






