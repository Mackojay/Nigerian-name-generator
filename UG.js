var naijaName = [
  'Ebuka','Tomiwa','Mohammed','Chinosom',
  'Damola','Sadiq','Emeka','Femi','Abdul','Osas',
  'Moyosore','Zayd','Ochuwa','Ochuko','Kewve','Dolapo','Chizobam',
  'Uchechi','Onyinye','Wura','Zainab','Amina','Ibukun','Ikenna',
  'Ali','Chibuikem','Aduke','','Aisha','Obinna','Ochukwu',
  'Chizutere','Ayinke','Agbeke','Ajoke','Aanu','Eyitope','Bukola',
  'Aremu','Funmi','Bunmi','Abeke','Anjola','Morenikeji','Seyi',
  'Amarachi','','Ekene','Ifeanyi','Isioma','Onochie','Ozioma',
  'Uzo','Amaka','Achebe','Halimah','Latifah','Danjuma','Gowon',
  'Rago','Hasan','Tanimu','Rashidi','Daran','Abache','Gambo',
  'Maiwake','Dawi','Arzika','Shekarau','Nomau','Adaeze','Adanna','Adaobi',
  'Sewa','Kanayo','Arinze','Bunke','Nonso','Anozie','Adaego','Adaku',
  'Hammed','Abidemi','Semilore','Abisola','Dipo','Juwon','Kayode','Chidera ',
  'Nifemi','','Bawo','Mariam','Kiitan','Pelumi','Olamide','Ope',
  'Yemi','Ayo','Kofo','Ajit','Dapo','Dayo','Dubem','Utibe',
  'Temidayo','Omoh','Doyin','Segun','Anike','Etieno','','Ife',
  'Bamishe','Adaora','Damilola','Kachi','Oboh','Temisan','Alero','Eyituoyo',
  'Chibuzor','Tomide','Sakirat','Chisom','Chinaza','Etim','Effiong','Nkem',
  'Emenike','Yobo','Okocha','Kanu','Chichi','Abeni','Nton','Ntul','Ntan',
  'Iwobi','Adewale','Afolabi','Afoke','Lola','Tobi','Tonbra',
  'Chinaka','Ebube','Nimo','Yetunde','Chuka','Olachi','Ugochi','Kosi','Shukurah',
  'Mujibah','Tolu','Tawaye','Kane','Tanko','Emofa','Baki','Kokari','Madugu',
  'Agada','Auta','Esosa','Abiodun','Bakwal','Auta','Layo','Titi','Mofe','Sade'
]; 
var finalName = ""

$(document).ready(function() {
  $("#gen-button").click(function(event){
  	document.getElementById("nameplace").innerHTML = randName();
  });
});

function randName(){
	finalName = naijaName[Math.floor( Math.random() * naijaName.length )];
	finalName += naijaName[Math.floor( Math.random() * naijaName.length )];
	if ( Math.random() > 0.5 ) {
	finalName += naijaName[Math.floor( Math.random() * naijaName.length )];
}
	return finalName;
};