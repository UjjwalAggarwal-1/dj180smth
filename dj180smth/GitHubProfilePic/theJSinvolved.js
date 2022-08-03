// for the first 3 columns and last three columns mirrored
var ends = [];
var middle = [];
for(var i=0;i<(Math.floor(Math.random()*21)+1);i++){
    ends.push(Math.floor(Math.random()*21)+1);
}
// for middle row
for(var i=0;i<(Math.floor(Math.random()*7)+1);i++){
    middle.push(Math.floor(Math.random()*7)+1+21);
}

for (a of ends){
    document.getElementById(a).className = 'colored'
    document.getElementById(50-a).className = 'colored'
}
for (a of middle){
    document.getElementById(a).className = 'colored'
}

function randChar(str){
            return str.charAt(Math.floor(Math.random() *str.length));
        }
        
const characters = 'abcdef0123456789';

    function genHexa(){
        strhex = '#';
        for(var i=0;i<6;i++){
            strhex += randChar(characters);
        }
        return strhex;
    }
var rancol = genHexa()
console.log(document.getElementsByClassName('colored'));
coll = document.getElementsByClassName('colored');
for(a of coll){
    a.style.background = rancol;
}
