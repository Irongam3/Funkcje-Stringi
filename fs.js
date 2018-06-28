// JavaScript Document
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'Triceratops';

var dinosaurBig = dinosaur.toUpperCase();
var dinoChange = text.replace('Velociraptor', dinosaurBig);


var dinoHalf = dinoChange.slice(0,72);
console.log(dinoHalf);