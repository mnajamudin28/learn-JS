var houseKeeper1 = {
   yearsOfExperience: 12,
   name: "Jane",
   cleaningRepertoire: ["Bathroom", "Toilet", "Bedroom"]
}

or

function houseKeeper(yearsOfExperience, name, cleaningRepertoire) {
   this.yearsOfExperience = yearsOfExperience
   this.name = name;
   this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new houseKeeper(10, "Jhon", ["lobby", "badroom"]);


function houseKeeper(yearsOfExperience, name, cleaningRepertoire) {
   this.yearsOfExperience = yearsOfExperience
   this.name = name;
   this.cleaningRepertoire = cleaningRepertoire;
   this.clean = function(){
      alert ("cleaning in progress..");
   }
}
housekeeper.clean();
