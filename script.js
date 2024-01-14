function getExercise() {
    let muscleElem = document.getElementById('dropdownType');
    let muscle = muscleElem.value;
    let numElem = document.getElementById('displayNum');
    let num = numElem.value;
    
    let difficultyElem  = document.getElementById('dropdownDiff')
    let difficulty = difficultyElem.value
    let diffNum = 10
    if(num < 0){
        return;
    }
    
    if(num == 0){
        num = 9999
    }
    let display = []
    if(difficulty == 'beginner'){
        diffNum = 1
    }else if(difficulty == "intermediate") {
        console.log("succ")
        diffNum = 2
    }else{
        diffNum = 3
    }

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
        headers: { 'X-Api-Key': 'HyufkDepdUpM5bVIOYLOeg==a9EZI62GZy7qJjbV'},
        contentType: 'application/json',
        success: function(result) { 
            document.getElementById("main").innerHTML = "";

            var j = 0;

            

            for (i = 0; i < result.length; i++) {
                if(result[i].difficulty == 'beginner'){
                    result[i].diffNum = 1
                }else if(result[i].difficulty == 'intermediate') {
                    result[i].diffNum = 2
                }else{
                    result[i].diffNum = 3
                }
                console.log(result[i].diffNum + "res")
                console.log(diffNum + 'set')
                if(result[i].diffNum <= diffNum){
                    var div = document.createElement("div");
                    div.id = "child" + i;

                    var name = document.createElement("h1");
                    name.id = "name";
                    name.innerHTML = result[i].name;
                    div.appendChild(name);

                    var type = document.createElement("h2");
                    type.id = "type";
                    type.innerHTML = result[i].type;
                    div.appendChild(type);

                    var muscle = document.createElement("h2");
                    muscle.id = "muscle";
                    muscle.innerHTML = result[i].muscle;
                    div.appendChild(muscle);

                    var equipment = document.createElement("h3");
                    equipment.id = "equipment";
                    equipment.innerHTML = result[i].equipment;
                    div.appendChild(equipment);

                    var difficulty = document.createElement("h3");
                    difficulty.id = "difficulty";
                    difficulty.innerHTML = result[i].difficulty;
                    div.appendChild(difficulty);

                    var instructions = document.createElement("p");
                    instructions.id = "instructions";
                    instructions.innerHTML = result[i].instructions;
                    div.appendChild(instructions);

                    document.getElementById("main").appendChild(div);
                    j++;
                    display.push(div)
                }
                
                if (j  >= num) {
                    break;
                }
                
            
            }
            if (num > j && num != 9999) {
                alert("Too many requests to display. Only " + j+ " results will be displayed.");
            }
          
        },
        error: function ajaxError(jqXHR) {
            alert('Error: ' + jqXHR.responseText);
        }
    });
}
