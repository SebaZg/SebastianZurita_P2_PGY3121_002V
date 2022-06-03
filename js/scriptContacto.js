let getBasePATH = ({ path }) =>
	`https://apps.gasco.cl/v1/locationService/${path}`;
         
                    

$("form").submit((e) => {
	e.preventDefault();
	let nombre = $("#nombreUsuario").val();
	let correo = $("#correoUsuario").val();
	

	let isValid = false;
	if (nombre == "" && !isValid) {
		isValid = true;
	}
	if (
		correo == "" ||
		(correo.match(/@gmail.com|@duocuc.com|@profesor.duoc.cl/) != -1 && !isValid)
	) {
		isValid = true;
	}
	if (!isValid) {
		$(".alert-success").addClass("show");
		setTimeout(() => {
			$(".alert-success").removeClass("show");
		}, 3000);
	} else {
		$(".alert-danger").addClass("show");
		setTimeout(() => {
			$(".alert-danger").removeClass("show");
		}, 3000);
	}
});