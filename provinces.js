var fs = require("fs"); // importation du modue de gestion de fichiers
var http = require("http"); // importe le module serveur http

var provinces = "provinces";
var objProvince;
fs.readFile('province.json', 'utf8', function (err, data){
	if(err) return console.error(err);
	objProvince = JSON.parse(data);
	console.log(objProvince.toString());
});

function genererTab(obj, lieu){

	var sChaine = "";

	sChaine += "<h1>Tableau de " + lieu +"</h1>";
	sChaine += "<table>";
	for (lieu in obj){

		sChaine += "<tr><td>" + lieu + "</td><td>" + obj[lieu].toString() + "</td></tr>";
	}
	sChaine += "</table>";

	return sChaine;
}

genererTab(objProvince,provinces);



console.log("localhost:8888/ is Live");