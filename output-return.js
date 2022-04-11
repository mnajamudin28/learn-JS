function getMilk(money, costPerBottle) { 
    console.log("leaveHouse"); 
    console.log("moveRight"); 
    console.log("moveRight"); 
    console.log("moveUp"); 
    console.log("moveUp"); 
    console.log("moveUp"); 
    console.log("moveUp"); 
    console.log("moveRight"); 
    console.log("moveRight"); 

  console.log(calcBottle(money, costPerBottle) + " bottle of milk");
    
    console.log("moveLeft"); 
    console.log("moveLeft"); 
    console.log("moveDown"); 
    console.log("moveDown"); 
    console.log("moveDown"); 
    console.log("moveDown"); 
    console.log("moveLeft"); 
    console.log("moveLeft");
    console.log("enterHouse");
    return calcChange(money, costPerBottle);
}

function calcBottle(startingMoney, costPerBottle){
        var numbOfBottle = Math.floor(startingMoney / costPerBottle);
        return numbOfBottle;
    }
function calcChange(startingMount, costPerBottle){
    var change = startingMount % costPerBottle;
    return change;
}


console.log("Hello master, here is your "+ getMilk(5, 2.5)+ "change");
