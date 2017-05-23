var firstArr = [1,2,3,4];
for (var i  = 0; i  < firstArr.length; i++) {
  firstArr[i] % 2 === 0? console.log("even") : console.log("odd");
}



var myArray = ['steve', 'sarah', 'mary', 'james'];

myArray = myArray.map(function(str){
  return str.charAt(0).toUpperCase() + str.slice(1).replace();
});
console.log(myArray);
