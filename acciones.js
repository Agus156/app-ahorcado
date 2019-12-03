$(document).ready(function(){
	var abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var encontradas = 0;
	var oportunidades = 0;
	var palabraoculta = "";
	var palabraactual = "";
	var temporal = "";
	var posicionactual = 0;
	var letraactual = 0;


function inicializarvariables(){
	encontradas = 0;
	oportunidades = 6;
	temporal ="";
	posicionactual = 0;
	letraactual= 0;	
	//palabraoculta = obtenerpalabra(encontradas);
	//palabraactual = ocultarpalabra(palabraoculta);
	$('#imagen').attr('src','imagenes/'+ahorcado+'.png');
	$('#palabra').text(palabraactual);
	$('#actual').text(abecedario[posicionactual]);
}

//document.addEventListener("deviceready",function(){
  $('#btncomenzar').on('click',function(){
	  inicializarvariables();
	  
  });
  
//});


}); //ready
