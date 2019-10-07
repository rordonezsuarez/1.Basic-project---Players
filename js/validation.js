  // Funcions de validació
	function validaEmail(email){
		const regex=/^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,4}$/i;
		return regex.test(email);
	}

	function validaTelefon(telefon){
		const regex=/^[0-9]{2,3}-? ?[0-9]{6,7}$/;
		return regex.test(telefon);
  }


	function validaNumeric(num){
		const regex=/^[0-9]+$/i;
		return regex.test(num);
	}


  function validaData(date, format="dd/mm/aaaa"){
    let regex=/^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/;
    if (format=="dd-mm-aaaa")
		  regex=/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
		return regex.test(date);
	}
