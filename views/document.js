// classe qui definit le document
// le document est un objet qui contient tous les elements html
// Attributs :
// 

// Méthodes :
// - end : revoie une chaine de caractère correspondant a la base du document html a renvoyer au client

/*var methode = Doc.prototype;


function Doc(){
	this.nom = "nom";
}
method.getNom = function(){
	return this.nom;
}
exports = Doc;*/

// sert de classe pour l'objet Document
module.exports.Document = function(){
	return {
		//fonction qui renvoie le document html
		end : 
			function(){
				str = 	'<!DOCTYPE html>';
				str += 	'<html lang="en">';
				str += 		'<head>';
		  		str += 			'<title>Bonjour</title>';
		  		str +=			'<meta charset="utf-8">';
		  		str += 			'<meta name="viewport" content="width=device-width, initial-scale=1">';
		  		str += 			'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">';
				str += 			'<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>';
		  		str +=			'<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>';
				str +=		'</head>';
				str +=		'<body>'; 
				str +=			'<div class="container text-center">';
				str +=				'<h1>Bonjour</h1>';
		  		str +=			'</div>';
				str +=		'</body>';
				str	+=	'</html>';
				return str;
		}
	}
}


