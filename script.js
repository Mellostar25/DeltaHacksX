var muscle = 'chest';

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
    headers: { 'X-Api-Key': 'HyufkDepdUpM5bVIOYLOeg==a9EZI62GZy7qJjbV'},
    contentType: 'application/json',
    success: function(result) {
        // Update the 'ex' variable inside the success callback
        // let str = result[0];
        // var name  = str.name;
        // var type = str.type;
        // var muscle = str.muscle;
        // let equipment = str.equipment;
        // let diffculty = str.difficulty;
        // let description = str.instructions;
        



        // // Update the display inside the success callback
        // document.getElementById("type").innerHTML = type;
        // document.getElementById("name").innerHTML = name;
        // document.getElementById("muscle").innerHTML = muscle;
        // document.getElementById("equipment").innerHTML = equipment;
        // document.getElementById("diffculty").innerHTML = diffculty;
        // document.getElementById("description").innerHTML = description;
        var i = 0; // Declare and initialize i

        result.forEach(element => {
            var div = document.createElement("div");
            div.id = "child" + i;
        
            var name = document.createElement("h1");
            name.id = "name";
            name.innerHTML = element.name;
            div.appendChild(name);
        
            var type = document.createElement("h2");
            type.id = "type";
            type.innerHTML = element.type;
            div.appendChild(type);
        
            var muscle = document.createElement("h2");
            muscle.id = "muscle";
            muscle.innerHTML = element.muscle;
            div.appendChild(muscle);
        
            var equipment = document.createElement("h3");
            equipment.id = "equipment";
            equipment.innerHTML = element.equipment;
            div.appendChild(equipment);
        
            var difficulty = document.createElement("h3");
            difficulty.id = "difficulty";
            difficulty.innerHTML = element.difficulty;
            div.appendChild(difficulty);
        
            var instructions = document.createElement("p");
            instructions.id = "instructions";
            instructions.innerHTML = element.instructions;
            div.appendChild(instructions);
        
            // Append the div to the document
            document.getElementById("main").appendChild(div);
        
            i++; // Increment i
        });
        


        // Additional code to execute after the HTML is updated
    },
    error: function ajaxError(jqXHR) {
        alert('Error: ' + jqXHR.responseText);
    }
});