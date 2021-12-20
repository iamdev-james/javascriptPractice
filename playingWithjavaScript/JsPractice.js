// EXERCISE 1
// function checkspeed(speed){
//   if (speed <= 70){
//     console.log('ok');
//   }
//   if(speed >= 70 + 5){
//     console.log(Math.floor(((speed - 70) / 5)) + " points");
//   }
//   if(speed >=180){
//     console.log("Liences suspended");
//   }
// }
// checkspeed(280);
// // EXERCISE 2
// numberrange(17);

// function numberrange(limit){
//   for (var i =0; i<= limit; i++){
//    const message = (i % 2 === 0)? "EVEN": "ODD";
//    console.log(i, message);
// };
// };
// // EXERCISE 3
// console.log(counttruthy([1,2,1,1,1, 0,0,0]))
// function counttruthy(array){
//   let count = 0;
//    for (let value of array)
//      if(value)
//        count++
//      return count;
//    }
// // EXERCISE 4
// var song = {
//   Artiste: 'Davido',
//   Releas_date: 2020,
//   Album: 4,
//   title: 'fem'
// }
// showProperties(song);
//  function showProperties(obj){
//    for (let key in obj)
//    if (typeof obj[key] === 'string')
//     console.log(key, obj[key])
//  }

// // EXERCISE 5

// console.log(sumOfMultiples(77));
// function sumOfMultiples(limit){
//   let sum = 0;
//   for ( var i = 0; i <= limit; i++){
//      if ( i % 3 === 0 || i % 5 === 0){
//        sum += i;
//      }
//     }
//     return sum;
// }

// // EXERCISE  6
// // can be done in a more simpler way using for of loop
// var yourScore = [100, 100, 100];
// calculateAverage(yourScore);
// function calculateAverage(marks){
//   let sumOfGrades = 0;
//    for ( let j = 0; j < marks.length; j++){
//       sumOfGrades += marks[j]
//    }
//    let average = sumOfGrades / marks.length;
//    if (average <= 59)
//     console.log('F');
//   if (average > 59 && average < 70)
//   console.log('D'); 
//   if (average > 69 && average < 80)
//   console.log('C'); 
//   if (average > 79 && average < 90)
//   console.log('B'); 
//   if (average > 89 && average < 101)
//   console.log('A');
// }

// // EXERCISE  7
// showstars(10);

// function showstars(rows){
//   for ( let row = 1; row <= rows; row++){
//   let stars = '';
//    for (let j = 0; j < row; j++)
//      stars += '*';

//      console.log(stars); }
// }

// // showPrime(7);

// // function showPrime(limit){
// //   for ( let pn = 1; pn <= limit; pn++){
// //     if (pn % 2 === 0 || pn % pn === 0){
// //       console.log(pn);
// //     }
// //   }
// // }

// //EXERCISE 9
// let myAddress = {
//   street: '15,lekki Estate',
//   city: 'Akure',
//   zip_code: 123
// }


// function showAddress(address){
//   for(let key in address)
//    console.log(key, address[key]);
// }

// showAddress(myAddress);


// // EXERCISE 10
// //Using factory and constructor function
// function ShowAddress(street, city, zipCode){
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
//   }
//  myAddress = new ShowAddress('No-25a', 'Akure', '1234')
//   console.log(myAddress);

// function showAddress(street, city){
//   return {
//     street,
//     city,
//     zipCode: 1234
//   }
// }
// let address = showAddress('No-15b', 'Lagos');
// console.log(address);

// // PLAY PLAY 
// //  var date = function(){
// //    console.log(new Date().toTimeString());
// //  }

// //  setInterval(date, 1000);


// // EXERCISE 11
// var address1 = new Address('N0-15b', 'Lagos');
// var address2 = new Address('N0-15b', 'Lagos');

// console.log(areEqual(address1,address2));
// console.log(areSame(address1,address2));


// function Address(street, city){
//   this.street = street;
//   this.city = city;
// }

// function areEqual(address1,address2){
//    return  address1.street === address2.street &&
//      address1.city === address2.city;
//    }

// function areSame(address1, address2){
//   return address1 === address2;
// }


// let post = {
//   title : "Ethical Hacking",
//   body : "Introduction into ethical hacking",
//   Author : "Dev. James",
//   Views : 2,
//   Comments : [
//     {
//       Author : "Mark",
//       Body : "Wonderful"
//     },
//     {
//       Author : "Gates",
//       Body : "Great"
//     }
//   ],
//   isLive : true
// }

// let showAuthor = post.Comments[0].Body;
// console.log(showAuthor);

// // function DraftPost(posts){
// //   post.body = posts
// // }
// DraftPost("Yes it actually did work")
// console.log(post);

// function DraftPost(title, body, author){
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = 0;
//   this.comments = [];
//   this.isLive = false;
// }

// let newpost = new DraftPost("Cyber-Security", "Introduction into cyber-security", "Dev. James");
// console.log(newpost);

// using factory function
// function draftPost(title, body, author){
//   return {
//     title,
//     body,
//     author,
//     views : 0,
//     comments : [],
//     isLive : false
//   }
// }
// let newPost= draftPost("Cyber-Security", "Introduction into cyber-security", "Dev. James");
// console.log(newPost);
//EXERCISE 13

// let Draft = [
//   {label : "$", tooltip : "Inexpensive", minPerPerson : 0, maxPerPerson : 30},
//   {label : "$$", tooltip : "Inexpensive", minPerPerson : 31, maxPerPerson : 50},
//   {label : "$$$", tooltip : "Expensive", minPerPerson : 51, maxPerPerson : 100}
// ]

// let resturant = {
//   averagePerPerson : 5
// }
// // deleting element
// let deleted = delete Draft[0].label
// console.log(Draft);



// ARRAYS
// Ex 1
// function numRange(min, max){
//   let num = [];
//    for (let i = min; i <= max; i++){
//       num.push(i);
//    }
//    return num;
// }
// let test = numRange(0, 20);
// console.log(test);

// Ex 2
// function includes (array, searchElement){
//    for (let searchNum of array){
//     if (searchElement === searchNum)
//     {return searchElement}
//   }
//   console.log("Not found")
// }
// let arr = [1, 2, 3, 4];
// console.log(includes(arr, 5));

// // Ex 3
// let arr = [1, 2, 3, 4, 5];
// function except (array, excluded){
//    let output = [];
//    for (let element of array){
//      if(!excluded.includes(element)){
//        output.push(element);
//       }
//     }
//     return output;
// }
// console.log(except(arr, [1]));


// Exercise 4

// function move (array, index, offset){
//   const position = index + offset;

//   if (position >= array.length || position < 0){
//     console.error("Invalid offset")
//     return;
//   }
//   const output = [...array];
//   const delElement = output.splice(index, 1)[0];
//   output.splice(position, 0, delElement);
//   return output;
// }
// const arr = [1,2,3,4];
// console.log(move(arr, 1, 1));

// Exercise 5
// function showOccurences(array, selement){
//   let count = 0;
//   for (let element of array)
//     if (element === selement)
//     count++;
//   return count;
// }


// meth 2
// function countOccurences(array, searchElem){
//   if (!Array.isArray(array))
//   throw new Error("Oh no, please input a valid Element");
//   return array.reduce((accumulator, current) => {
//     const occurences = (current === searchElem)? 1 : 0;
//     return accumulator + occurences;
//   }, 0);
// }
// try{
//   let arr = 3;
// test = countOccurences(arr, 3);
// console.log(test);}
// catch(e){
//   console.log(e.message)
// }

// Exercise 6
// function getMax(array){
//   if (array.length === 0){
//      return undefined;}
//     //  meth 1
//   // let max = array[0];
//   // for (let i = 1; i < array.length; i++){
//   //     if (array[i] > max)
//   //     max = array[i];
//   //   }
//   //   return max;
//   // meth 2
//   return array.reduce((a, b) => (b > a)? b : a);
// }
// let arr = [-20];
// test = getMax(arr);
// console.log(test);

// Exercise 7
// let movies = [
//   {title : 'a', year : 2018, rating : 4.5},
//   {title : 'b', year : 2018, rating : 4.7},
//   {title : 'c', year : 2018, rating : 3 },
//   {title : 'd', year : 2017, rating : 4.5}
// ]

// function getBestRated(array){

//  const filtered = array.filter(value => {
//     return value.year === 2018 && value.rating > 4;
//   }).sort((a,b) => {
//     if (a.rating < b.rating) return 1;
//     if (a.rating > b.rating) return -1;
//   });
//   let title = filtered.forEach(index => {
//     console.log(index.title)
//   });
//   return title;
// }
// getBestRated(movies);

// Exercise 8

// function calcSum(...nums){
//   if (nums.length === 1 && Array.isArray(nums[0])){
//     // meth 1
//    nums = [...nums[0]]
//     // meth 2
//     // let total = 0;
//     // for (let value of nums[0]){
//     //    total += value};
//     // return total;
//   }
//   return nums.reduce((a, b) => a + b)
//     }
// let numbers = calcSum([1, 2, 9, 3, 4, 5, 6, 7]);
// console.log(numbers);


// Exercise 9

// let circle = {
//   radius : 5,
//   get area (){
//    return Math.round(Math.PI * this.radius * this.radius)
//   }
// }
// console.log(circle.area)

// practice
// const log = document.getElementById('log');

// document.addEventListener('keypress', logKey);

// function logKey() {
//   log.innerHTML = "testing"
// }

// document.onkeyup = function(myEvent) { 
//   if (myEvent.which === 65){
//     console.log(myEvent.key);
//   } else {
//    console.log(myEvent.key)
//    }
//  };

// let testing = "iamshaunjp"

// console.log(testing.split().toString());


// function Stopwatch(){
//   let running, startTime, endTime,duration = 0;
//   Object.defineProperty(this, 'start', {
//      get: function(){
//      if(running)
//      throw new Error('Stopwatch already started')

//      running = true;
//      startTime = new Date;
//      }
//   });
//   Object.defineProperty(this, 'stop',{
//       get: function(){
//       if(!running)
//      throw new Error('Stopwatch has not been started')
 
//      running = false;
//      endTime = new Date;
 
//    const result = (endTime.getTime() - startTime.getTime())/1000;
//    duration += result;
//    }
//   });
//   this.reset = function (){
//     duration = 0;
//     startTime = null;
//     endTime = null;
//     running = false;
//   }
//   Object.defineProperty(this, 'duration', {
//     get: function(){return duration}
//   })
// }


//Stop watch

// function Stopwatch(){
//   let running, startTime, endTime, duration = 0;
//   this.running = running;
//   this.startTime = startTime;
//   this.endTime = endTime;
//   this.duration = duration;
//   Object.defineProperty(this, 'duration', {
//     get: function(){return duration},
//     set: function(value){ duration = value}
//   });

//   Stopwatch.prototype.start = function(){
//     if(this.running)
//     throw new Error('this already started')
 
//     this.running = true;
//     this.startTime = new Date;
//     }
//  };
//  Stopwatch.prototype.stop = function(){
//      if(!this.running)
//     throw new Error('this has not been started')

//     this.running = false;
//     this.endTime = new Date;

//   const result = (this.endTime.getTime() - this.startTime.getTime())/1000;
//   this.duration += result;
//   };
//   Stopwatch.prototype.reset = function (){
//     this.duration = 0;
//     this.startTime = null;
//     this.endTime = null;
//     this.running = false;
//   }


// let str = 'James'
// console.log(str.split('a'));

// var T_date = new Date();
// console.log(T_date.getTime());
// console.log(T_date.getTimezoneOffset());


//STOPWATCH IMPLEMENTATION
// let min = document.getElementById('minute')
// let sec = document.getElementById('seconds')
// let btn = document.getElementById('btn')

// let minute = 30,
// seconds = 00;
// let running = false;
// function startTime(){
//   if(!running){
//     if(seconds == 00){
//       minute -= 1;
//       seconds = 60;
//       min.textContent = minute;  
//     }else{
//       seconds -= 1
//       sec.textContent = seconds
//     }
//   }
// }
// btn.addEventListener('click', showTime)
// function showTime(){
//  if(!running){
//    running = true;
//   setTimeout(startTime, 1000)
//  } else {
//    running = false;
//   clearTimeout(startTime)
//  }
// }
