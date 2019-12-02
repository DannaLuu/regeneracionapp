//JavaScript Document

$(document).ready(function(e){
	var citas =[];
	$('#enviar').on('click',function(){
		//mostrar GIF
		$.when($.post("http://192.168.4.35/regeneracion/buscarcitas.php",{usuario: $('#usuario').val(),password: $('#pass').val()})).then(
		function exito(datos) {
			alert (datos);
		},
		function error() {
			alert ("Error, no se puede alcanzar el servidor");
		}
		); //then when
	}); //click enviar
});
