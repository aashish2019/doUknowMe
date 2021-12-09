console.log("ex 1");

console.log("ashish");

console.log("ex 1");


 var readlineSync = require('readline-sync');
var user = readlineSync.question('Whats your name? ');
console.log(user);
console.log("ex 3");

console.log("welcome " + user);
console.log("ex 4");

var friendage = readlineSync.question('Are you older than 25, buddy? ');

if(friendage==="yes"){
  console.log("right");
}
else{
  console.log("wrong");
}

console.log("ex 5 + 6");

var friendtown = readlineSync.question('is your hometown bokaro, buddy? ');
var score = 0;
if(friendtown==="yes"){
  console.log("right");
  score++;
  console.log("Current Score is "+score);
}
else{
console.log("wrong");
score--;
console.log("Current Score is "+score);

}
console.log("ex 7");


function add(firstNum, secondNum){
 let finalNumber = firstNum + secondNum;
 console.log("The First Number is "+ firstNum + " The Second NUmber is "+ secondNum);
 return finalNumber;
}



var firstNum = parseInt(readlineSync.question('Enter the First Num '));

var secondNum = parseInt(readlineSync.question('Enter the Second Num '));

var sum = add(firstNum,secondNum);
console.log(sum);

console.log("ex 8");


function AnswerCheck(question,answer){
  var answerofuser= readlineSync.question(question);
  if(answerofuser===answer){
    console.log("YOU ARE RIGHT");
    score++;
    console.log("Current Score is "+score);


  }
  else {
    console.log("sorry, wrong answer");
    score--;
    console.log("Current Score is "+score);

  }

}



question1="Who won the last ICC men world Cup? ";
answer1="England";
AnswerCheck(question1, answer1);

console.log("ex 9");

var user2 = readlineSync.question('Whats your name again? ');

for(i=1;i<6;i++){
  console.log(i + " " + user2);
}


console.log("Star Pattern Exercise");

var numberofstars = parseInt(readlineSync.question('Enter the number of Rows of Stars '));

for (i=0; i<numberofstars; i++){
  for (j=0; j<= i ; j++){
  process.stdout.write("*");
   
  }
  console.log(" ");
}

console.log("ex 10");


var numberofinvertedstars = parseInt(readlineSync.question('Enter the number of Rows of Stars to print inverted Stars '));

for (i=numberofinvertedstars; i>=0; i--){
  for (j=i; j>=0; j--){
  process.stdout.write("*");
   
  }
  console.log(" ");
}

console.log("ex 10");


var listItems =  ["apple", "orange", "banana", "rice", "wheat"];
console.log(listItems[0]);
console.log(listItems[2]);
console.log(listItems[listItems.length-1]);

console.log("ex 11");

for(i=0;i<listItems.lengt;i++){
  console.log(listItems[i]);
}

console.log("ex 11");

var batman = {
  color: "black",
  feature: "car"
}

var superman = {
  color: "red",
  feature: "fly"
  }





