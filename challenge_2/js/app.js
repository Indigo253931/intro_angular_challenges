console.log('challenge #2 -- app.js loaded!');

 var app = angular.module("appTwo", []);
 app.controller("WelcomeController", WelcomeController);
 app.controller("WDIController", WDIController);

 function WelcomeController(){
   this.full_name="Monica";
   this.age="19";
   this.city="Temecula";
   this.state="California";
   this.name_count="6";
   this.shout="Monica!";
 }

 function WDIController(){
   this.class_name = "White Walkers";
   this.enrolled_students="15";
   this.start_date="June 13th";
   this.end_date="September 3rd";
   this.daysRemaining="21";
 }
