// variavel de escopo global: qualquer codig JS consegue ler/escrever nela
var xyz = 666;

if (window.navigator.userAgent.lastIndexOf('Edge') > 0) {
    alert('Use o Chrome ou Mozzila');
}

function calcularImc() {
    // variaveis de escopo delimitado: so eh possivel ler/escrever de dentro dessa function
    // externamente elas nao sao visiveis
    var idadeElement = document.getElementById('idade');
    var alturaElement = document.getElementById('altura');
    var pesoElement = document.getElementById('peso');
    
    var imcElement = document.getElementById('imcTotal');
    var imcTotal = parseFloat(pesoElement.value) / ( parseFloat(alturaElement.value) * parseFloat(alturaElement.value) );
	
	//imcElement.innerHTML = 'O seu IMC é ' + imcTotal.toFixed(1) + ' kg/m²';
	
	
	if (imcTotal < 16.00 ){
		imcElement.innerHTML = 'O seu IMC é ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificação: Magreza grave';
	} else if (16.00 <= imcTotal && imcTotal < 17.00 ){
		imcElement.innerHTML = 'O seu IMC é ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificação: Magreza moderada';
	} else if (17.00 <= imcTotal && imcTotal < 18.50 ){
		imcElement.innerHTML = 'O seu IMC é ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificação: Magreza leve';
	} else if (18.50 <= imcTotal && imcTotal < 25.00 ){
		imcElement.innerHTML = 'O seu IMC é ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificação: Saudável';
	} else if (25.00 <= imcTotal && imcTotal < 30.00 ){
		imcElement.innerHTML = 'O seu IMC é ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificação: Sobrepeso';
	} else if (30.00 <= imcTotal && imcTotal < 35.00 ){
		imcElement.innerHTML = 'O seu IMC é ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificação: Obesidade Grau I';
	} else if (35.00 <= imcTotal && imcTotal < 40.00 ){
		imcElement.innerHTML = 'O seu IMC é ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificação: Obesidade Grau II (Severa)';
	} else {
		imcElement.innerHTML = 'O seu IMC é ' + imcTotal.toFixed(1) + ' kg/m²' + '<br /> Classificação: Obesidade Grau III (Mórbida)';
	}

    
}