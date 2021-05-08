var imageSource = "images/";

function GetSelectedText(){
    
    //Get Workout from dropdown list
    var e = document.getElementById("SelectWorkout");
    var Workresult = e.options[e.selectedIndex].text;

    //Get Difficutly from dropdown list 
    var elementDiff = document.getElementById("SelectDifficulty");
    var diffresult = elementDiff.options[elementDiff.selectedIndex].text;
                
    //If workout is select it alerts the user to select a workout type
    if (Workresult == "Select"){
        alert("Please select a workout");
        return 0;
    }
    
    //Calls the randomWorkout function to generate a list of random workouts
    var randomWorkouts = randomWorkout(Workresult)

    //Gives a value to the difficulty 
    var difficutly = [];
    switch(diffresult){
        case "Beginner": difficutly[0] = "3"; difficutly[1] = "10"; break;
        case "Moderate": difficutly[0] = "4"; difficutly[1] = "12"; break;
        default: difficutly = "5"; difficutly[1] = "15";  break;
    }

    //Puts the random workouts into the unordered list 
    document.getElementById("Workout1").innerHTML = difficutly[0] + " rounds " + difficutly[1] + "x" + randomWorkouts[0].Workout;
    document.getElementById("Workout2").innerHTML = difficutly[0] + " rounds " + difficutly[1] + "x" + randomWorkouts[1].Workout;
    document.getElementById("Workout3").innerHTML = difficutly[0] + " rounds " + difficutly[1] + "x" + randomWorkouts[2].Workout;

    //Puts the name and the image into the html file
    var image1 = document.getElementById('img1');
    document.getElementById("Name1").innerHTML = randomWorkouts[0].Workout;
    image1.src = imageSource + randomWorkouts[0].image;
    
    
    var image2 = document.getElementById('img2');
    image2.src = imageSource + randomWorkouts[1].image;
    document.getElementById("Name2").innerHTML = randomWorkouts[1].Workout;

    var image3 = document.getElementById('img3');
    image3.src = imageSource + randomWorkouts[2].image;
    document.getElementById("Name3").innerHTML = randomWorkouts[2].Workout;
}


function randomWorkout(type){
    //Calls the database and takes all workouts that are the same type
    var typeWorkouts = [];
    for (var i = 0; i < Workouts.length; i++){
        if (Workouts[i].Type == type){
            typeWorkouts.push(Workouts[i]);
        }
    }
    //Gets the length of the list
    var length = typeWorkouts.length;

    //Generates 3 random workouts from the list of random workouts
    var randomWorkouts = [];
    var random = [];
    for (var i = 0; i < 3; i++){
        //Generates a random number from 0 to length-1
        var randomNum = Math.floor(Math.random() * (length * 1) + 1)-1;
        //if randomNum is already used from a previous iteration
        if(random.includes(randomNum)){
            i--;
            continue;
        }
        //puts the random number into a list
        random.push(randomNum);
        //puts the workout into the list
        randomWorkouts.push(typeWorkouts[random[i]]);
    }
    //return the random workout
    return randomWorkouts;
}