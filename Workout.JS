//var workout1 = "2 rounds 20 pushups";
//var workout2 = "3 rounds 10 situps";
//var workout3 = "2 rounds 10 squats";
//var workouts = ["Pushup", "situps", "squats"];



var image1 = document.createElement("img");
document.getElementById("Name1").innerHTML = workouts[0];
image1.src = "pushup.jpg";
var src = document.getElementById("img1");
src.appendChild(image1);

var image2 = document.createElement("img");
image2.src = "situp.jpg";
document.getElementById("Name2").innerHTML = workouts[1];
var src = document.getElementById("img2");
src.appendChild(image2);

var image3 = document.createElement("img");
image3.src = "squat.jpg";
document.getElementById("Name3").innerHTML = workouts[2];
var src = document.getElementById("img3");
src.append(image3);


function GetSelectedText(){
    //Get Workout
    var e = document.getElementById("SelectWorkout");
    var Workresult = e.options[e.selectedIndex].text;

    //Get Difficutly
    var elementDiff = document.getElementById("SelectDifficulty");
    var diffresult = elementDiff.options[elementDiff.selectedIndex].text;
    alert(diffresult);
                
    if (Workresult == "Select"){
        alert("Please select a workout");
        return 0;
    }
    
    var randomWorkouts = randomWorkout(Workresult)

    var difficutly;
    switch(diffresult){
        case "Beginner": difficutly = "3"; break;
        case "Moderate": difficutly = "4"; break;
        default: difficutly = "5"; break;
    }

    document.getElementById("Workout1").innerHTML = difficutly + " rounds " + randomWorkouts[0].Workout;
    document.getElementById("Workout2").innerHTML = difficutly + " rounds " + randomWorkouts[1].Workout;
    document.getElementById("Workout3").innerHTML = difficutly + " rounds " + randomWorkouts[2].Workout;
}


function randomWorkout(type){
    var typeWorkouts = [];
    for (var i = 0; i < Workouts.length; i++){
        if (Workouts[i].Type == type){
            typeWorkouts.push(Workouts[i]);
        }
    }
    var length = typeWorkouts.length;

    var randomWorkouts = [];
    var random = [];
    for (var i = 0; i < 3; i++){
        var randomNum = Math.floor(Math.random() * (length * 1) + 1)-1;
        if(random.includes(randomNum)){
            i--;
            continue;
        }
        random.push(randomNum);
        randomWorkouts.push(typeWorkouts[random[i]]);
    }
    return randomWorkouts;
}





