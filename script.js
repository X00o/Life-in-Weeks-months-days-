let aageBtn = document.getElementById('btn');
let aage =document.getElementById('age');
aageBtn.addEventListener('click', function(){
    let yearsRemaining= 90-aage.value;
    var days = yearsRemaining*365; 
    var weeks= yearsRemaining*52; 
    var months= yearsRemaining*12;
    alert("You have "+ days +" days, " + weeks + " weeks, and "+ months+ " months left. ");
})

aage.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // event.preventDefault();
        document.getElementById("btn").click();
      }
});