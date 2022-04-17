function anotherAddEventListener(typeOfEvent, callback){
   //detect event code

   var eventTahtHappened={
      eventType: "keypess",
      key: "p",
      durationOfKeyPress: 2,
   }
   if(eventTahtHappened.eventType === typeOfEvent){
   callback(eventTahtHappened);
   }
}

anotherAddEventListener("keypress", function(event){
    console.log(event);
});
