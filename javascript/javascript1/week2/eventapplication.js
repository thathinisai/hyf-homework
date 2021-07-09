function getEventWeekday(eventday){
    const weekdays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today= new Date();
    const eventOn=(today.getDay() + eventday)%7;

    console.log ("Today is " + weekdays[today.getDay()]+ " and the event is in " + eventday +" days. Therefore the event will be held on a " + weekdays[eventOn]) + ".";

}
getEventWeekday(5);
getEventWeekday(15);

