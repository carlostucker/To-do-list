//going to try and get user input then print that on page
let counter = 0;
let completed = 0;

//clearList button removes entire list

document.getElementById("submit").addEventListener("click", addItem);

document.getElementById("clearList").addEventListener("click", function(){
    list = document.getElementById("toDoList");
    //checking if list still has li elements to delete
    while(list.firstChild){
        list.removeChild(list.firstChild); //removes the first child node
    }
    counterChange(-counter); //makes the counter 0
});

//function to update total number of items in list display
function counterChange(c){
    counter = counter + c;
    document.getElementById("counter").innerHTML = "Total: "+counter; //changes total in the p tag
}

//function to add item to list
function addItem(){
    
    var input = document.getElementById("item").value; //getting user input
    var li = document.createElement("li"); //creating li element
    li.appendChild(document.createTextNode(input)); //li element with user input text
    var removeButton = document.createElement("button"); //remove button element
    var doneButton = document.createElement("button"); //done button element
    
    //remove button code
    removeButton.innerHTML = "Remove";
    removeButton.setAttribute("id", "removeButton "+counter);
    removeButton.setAttribute("onclick", "removeItem(this)");
    li.appendChild(removeButton);

    //done button
    doneButton.innerHTML = "Done";
    doneButton.setAttribute("id", "doneButton"+counter);
    doneButton.setAttribute("onclick", "doneItem(this)");
    li.appendChild(doneButton);

    //adding li element to toDoList
    document.getElementById("toDoList").appendChild(li);
    counterChange(1);
    updateCompleted();
}

//function to remove list item
function removeItem(element){
    element.parentNode.remove();
    counterChange(-1);
    if(element.parentNode.className == "done"){
        completed -=1;
    }
    
    //so that it doesnt display NAN when no list items
    if(counter ==0){ 
        document.getElementById("completed").innerHTML = "Completed: 0.00%";
    }else{
        updateCompleted();
    }
    
}
function updateCompleted(){
    percentage = ((completed/counter)*100).toFixed(2); //calculates percentage to 2 decimal places
    document.getElementById("completed").innerHTML = "Completed: "+percentage + "%";
}

function doneItem(element){
    if(element.parentNode.className != "done"){
        element.parentNode.setAttribute("class", "done");
        completed +=1;
        updateCompleted();
    }

}


