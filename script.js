function getWeeksLeft(){
    event.preventDefault();
    var years = document.getElementById("ageInYears").value;
    var results = document.getElementById("results");
    var weeksLeft = (80 - years) * 52;

    if (weeksLeft <= 0) {
        results.innerHTML = (`👀 ...This is odd, you're ${weeksLeft} in debt. Better use 'em wisely!`)
    } else {
        results.innerHTML = (`You are ${years} old and have ${weeksLeft} weeks left to live.`)
    }

}