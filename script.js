var words1 = ["do insurrection", "trade GME", "do yoga", "meditate", "pray", "cook", "stretch", "synchronize swim", "do the splits", "become enlightened", "soul search", "yodel"]
var words2 = ["browsing /r/anime", "watching tv", "hiking", "committing felony fraud", "scamming kids", "eating dinner", "watching Boku no Pico", "sliding into your DMs", "showering", "doing anagrams", "building a PC"]

function generate_alvinism() {
    document.getElementById("verb1").innerHTML = words1[Math.floor(Math.random()*words1.length)];
    document.getElementById("verb2").innerHTML = words2[Math.floor(Math.random()*words2.length)];
}
