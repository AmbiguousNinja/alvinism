// load straight facts
var words1 = []
var words2 = []
fetch("words1.txt").then( r => r.text() ).then( text => words1 = text.split('\n'))
fetch("words2.txt").then( r => r.text() ).then( text => words2 = text.split('\n'))

function generate_alvinism() {
    document.getElementById("verb1").innerHTML = words1[Math.floor(Math.random()*words1.length)];
    document.getElementById("verb2").innerHTML = words2[Math.floor(Math.random()*words2.length)];
}
