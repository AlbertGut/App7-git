// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		$('#izquierda').on("swipeleft", function(){
			navigator.notification.alert("Deslizo a la izquierda",function(){"aplicacion7","aceptar"});
        }); //cierre dezlizar izquierda
		$('#derecha').on("swiperight", function(){
			navigator.notification.confirm("¿Que quieres hacer?",function(opt){
				switch(opt)
				{
					case 1:
					navigator.notication.beep(2);
					break;
					
					case 2:
					navigator.notification.vibrate(2000);
					break;
				}
			},"aplicacion7","beepear,Vibrar,Cancelar");
		});//cierre del deslizar
	}, false);//cierre del deviceready
});//cierre del document principal
