//Array Players

let players = [
  ["34489318T","Bruce","Banner","638912281","imhulk@gmail.com","12/12/1976","9012901290","PRO"],
  ["34239318T","Tony","Stark","638911281","imironman@gmail.com","4/12/1975","9027901290","PRO"],
  ["34423318T","Natasha","Rommanoff","643912281","imblackwidow@gmail.com","3/1/1984","9122901290","BEG"],
  ["23489318T","Clint","Barton","664964281","imhawkey@gmail.com","3/5/1978","9012991290","BEG"]
];

//How create a form whit players inputs
function createListPlayers(tPlayers,pContainer,pTypes){
  for(let i=0; i < tPlayers.length; i++){
    let jugador = tPlayers[i];

      if(pTypes==jugador[7]){
        pContainer.innerHTML+="<div class='refjug'>" + "<img class='imgu' src='../img/perfil.png'>" + "<div class='infi'>" +
                              "<p>" + jugador[1] + "<span> " + jugador[2] + "</span>" + "</p>" +
                              "<p>" + jugador[4] + " </p>" + "<p>" + jugador[7] + " </p>" + "</div>" + "</div>" + "<br>";
                              document.myForm.reset();

      }

  }

}



//verified age function
function isValidPlayer(pAge){

  // How add players
  let dateBrn = document.getElementById("date").value;
  let aDate = dateBrn.split("/");

  //JavaScript counts months to 0 to 11 (1 to 12)
  let bornDate = new Date(aDate[2], aDate[1]-1, aDate[0]);

  let currentDate = new Date();
  let age = diffAge(currentDate, bornDate);

  return (age>=pAge);

}



function checkform(){
          let camp_name = document.getElementById("name");
          let camp_surname = document.getElementById("surname");
          let camp_dni = document.getElementById("dni");
          let camp_date = document.getElementById("date");
          let camp_telephone = document.getElementById("telephone");
          let camp_email = document.getElementById("email");
          let camp_iban = document.getElementById("iban");
          let camp_typePlayer = document.getElementById("typeplayer");

          let txtData = camp_date.value;
          let txtTel = camp_telephone.value;
          let txtEmail = camp_email.value;


//Verifing data

          if(!validaData(txtData) || txtData=="" ){
            alert("La fecha que has introducido es incorrecta");
            return false
          }



          if(!validaEmail(txtEmail) || txtEmail=="" ){
            alert("El email que has introducido es incorrecto");
            return false
          }



          if(!validaTelefon(txtTel) || txtTel=="" ){
            alert("EL telefono que has introducido es incorrecto");
            return false
          }






//Required verification function

          if(!isValidPlayer(16) && camp_typePlayer.value === "Begginer"){
            alert("El participante que estas insertando es menor de 16 años");
            return false;
                    }


          if(!isValidPlayer(18) && camp_typePlayer.value === "Professional"){
            alert("El participante que estas insertando es menor de 18 años");
            return false;
                    }

//Non repeat player in the forum loop

          for(let i = 0; i < players.length; i++){
              if (camp_dni.value == players[i][0]){
              alert("Ya existen este participante,inserte otro");
              return false;
                      }
                    }

//Check required data
      if(camp_name.value != "" && camp_surname.value != "" && camp_dni.value != ""  && camp_iban.value != ""){

      //Begginers
      if(camp_typePlayer.value == "Begginer"){
            players.push([camp_dni.value, camp_name.value, camp_surname.value, camp_telephone.value, camp_email.value, camp_date.value, camp_iban.value, "Begginer"]);
            let containerPlayers = document.getElementById("gridBEG");

            createListPlayers(players, containerPlayers, "Begginer");

      //Professional
      } else {
            players.push([camp_dni.value, camp_name.value, camp_surname.value, camp_telephone.value, camp_email.value, camp_date.value, camp_iban.value, "Professional"]);
            let containerPlayersPro = document.getElementById("gridPRO");

            createListPlayers(players, containerPlayersPro, "Professional");
                  }
              }
              else{
                alert("Inserte los datos requeridos para poder inscribir al participante");
          }
      }






window.onload=function(){
  console.log("Cargado correctamente");

  //PROFESSIONALS
  let containerPlayersP = document.getElementById("gridPRO");
  createListPlayers(players, containerPlayersP, "PRO");

  //BEGGINERS
  let containerPlayersB = document.getElementById("gridBEG");
  createListPlayers(players, containerPlayersB, "BEG");
}
