// JavaScript Document
$(document).ready(function(e){
	
	var colecciones=[];
	var btnBuscar = document.getElementById('btnBuscar');

$("#btnBuscar").on('click',function(){
	$('#cargando').show();
	$.when(obtenercoleccion($('#txtIp').val())).then(function successHandler(datos){
		var arreglo = JSON.parse(datos);
for(var y=0; y<arreglo.length; y++)
{
	var option= new Option(arreglo[y].coleccion,arreglo[y].coleccion);
	$('#colecciones').append(option);
	$('#colecciones').trigger("change");
	}
		$('#cargando').hide();

	$('#seleccion-opciones').show();
	}, function errorHandler(){
				$('#cargando').hide();

		alert("Error");
		
	});
	return false;
}); //elek btnenviar

function obtenercoleccion(coleccion) {
	return $.post("http://192.168.4.38/ahorcado/obtenercolecciones.php",function(){
			//se ejecuta lo que hay aqui si se pudo enviar la informacion
			alert("informacion enviada");
			});
			
		
				
					
				}//obtenercolecciones
				
		
 function ocultarBotoNBusc(){
		btnBuscar.style.display = 'none';
		btnBuscar.style.display = 'inline';
	}




 
});//ready

function ocultarpalabra(palabra) {
	palabraactual="";
 for(x=0;x<palabra.lenght;x++)
 {
	 if(abecedario.includes(palabra.charA+(x)))
	 {
		 palabraactual=palabraactual+"_";
	 }
	 else
	 {
		 palabraactual=palabraactual+palabra.charA+(x);
	 }

}
return palabraactual;
}


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