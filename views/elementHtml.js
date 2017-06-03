//classe definissant l'objet elementHtml
// cet objet correspond à un element de la page
// Il s'affiche en modifiant le DOM, la chaine de caractere a renvoyer
// Attributs :
// - fils de type tableau d'elementHtml: élements contenus a l'intérieur de cet element 
// Methodes :
// - init() : renvoie une chaine de caractere qui correspond a un script permettant d'afficher cet element dans la page html 

exports.elementHtml = function(){
	return {
		fils : []

	}
}