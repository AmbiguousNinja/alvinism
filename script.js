var words1 = ["stretch", "synchronize swim", "do the splits", "become enlightened", "soul search", "yodel"]
var words2 = ["watching tv", "hiking", "committing felony fraud", "scamming kids", "eating dinner", "watching Boku no Pico", "sliding into your DMs"]

function generate_alvinism() {
    document.getElementById("verb1").innerHTML = words1[Math.floor(Math.random()*words1.length)];
    document.getElementById("verb2").innerHTML = words2[Math.floor(Math.random()*words2.length)];
}
