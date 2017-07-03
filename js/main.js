
$(document).ready(function(){
	$(".name-container").append(" <p id='malo1'>Error</p>");
	$(".lastname-container").append(" <p id='malo2'>Error</p>");
	$(".email-container").append(" <p id='malo3'>Error</p>");
	$("#input-password").parent().append(" <p id='malo4'>Error</p>");
	$("#malo1").hide();
	$("#malo2").hide();
	$("#malo3").hide();
	$("#malo4").hide();
	$(document).on('keypress', '#name', function (event) {
	    var regex = new RegExp("^[a-zA-Z]+$");
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (!regex.test(key)) {
	        event.preventDefault();
	        return false;
	    }
    });
    $(document).on('keypress', '#lastname', function (event) {
	    var regex = new RegExp("^[a-zA-Z]+$");
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (!regex.test(key)) {
	        event.preventDefault();
	        return false;
	    }
    });
    $(document).on('keypress', '#input-email', function (event) {
	    var regex = new RegExp("^[a-zA-Z0-9@.]+$");
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (!regex.test(key)) {
	        event.preventDefault();
	        return false;
	    }
    });
	$(".submit-btn").on("click", function(){
		var nombre = $("#name").val();
		var apellido = $("#lastname").val();
		var correo = $("#input-email").val();
		var contrasena = $("#input-password").val();
		if(nombre == ""){
			$("#malo1").show();
		}else{
			$("#malo1").hide();
		}
		if(apellido == ""){
			$("#malo2").show();
		}else{
			$("#malo2").hide();
		}
		if(correo.indexOf('@') == -1 || correo == ""){
			$("#malo3").show();
		}else{
			$("#malo3").hide();
		}
		if(contrasena == "" || contrasena.length < 6 ||contrasena == "123456" || contrasena == "098765" || contrasena == "password"){
			$("#malo4").show();
		}else{
			$("#malo4").hide();
		}

		if(nombre != "" && apellido != "" && correo.indexOf('@') != -1 && correo != "" && contrasena != "" && contrasena.length >= 6 && contrasena != "123456" && contrasena != "098765" && contrasena != "password"){
			alert("Formulario Enviado");
		}

	});
	
});