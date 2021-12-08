//Ex.1 Change Int to String
console.log("Ex.1 Change Int to String")
function numberToString(num){
    var stringNumber = num.toString();
    return stringNumber;
    
}
var number = numberToString(100);
console.log(number);
// var num = 100;
// var stringNumber = num.toString();
// console.log(stringNumber);
// let type = typeof(stringNumber);
// console.log(type)
console.log("\n========================\n");

//Ex.2 Return Negative
console.log("Ex.2 Return Negative")
function makeNegative(num) {
    if(num != null){
        if(num <= 0){
            return num;
        }else{
            return num*(-1);
        }
    }    
}
var number = makeNegative(0);
var number2 = makeNegative(20);
var number3 = makeNegative(-30);
console.log(number+' '+number2+' '+number3);
console.log("\n========================\n");

//Ex.3 Opposite number
console.log("Ex.3 Opposite Number")
function opposite(number) {
    if(number < 0){
      return number*-1;
    }else{
      return number*-1;
    }
}
var number = opposite(0);
var number2 = opposite(20);
var number3 = opposite(-30);
console.log(number+' '+number2+' '+number3);
console.log("\n========================\n");

//Ex.4 Remove First and Last Character
console.log("Ex.4 Remove First and Last Character");
function removeChar(str){
    let remove = str.slice(1,-1);
    return remove;
};
var me = removeChar("chanon");
console.log(me);
console.log("\n========================\n");

//Ex.RankUp Vowel Count
// function getCount(str) {
//     let count = 0
//     let arr = [];
//     for(let i = 0;i<str.length;i++){
//         arr[i] = str.charAt([i]);
//         if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u'){
//             count++
//         }
//     }return count;
//   }
  function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] == vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }
  console.log(getCount("abracadabra"))
  console.log("\n========================\n");

//EX.RankUp Odd or Even?
function oddOrEven(array) {
    let sum = 0;
    let result;
     for(let i = 0;i<array.length;i++){
       sum += array[i]
     }
    if(sum%2 == 0){
      return `even`
    }return `odd`
    
  }

  console.log(oddOrEven([0, 1, -4]))
  console.log("\n========================\n");

  // function outlier(integers) {
  //   function par(i) { return i & 1; }
  
  //   let parity = par(integers[0]);
  //   if (parity != par(integers[1])) {
  //     if (parity == par(integers[2]))
  //       // [0] and [2] are the true parity so [1] is the outlier
  //       return integers[1];
  
  //     // [1] and [2] are the true parity so [0] is the outlier
  //     return integers[0];
  //   }
  //   return integers.find((i) => par(i) != parity);
  // }

  // console.log(outlier([2,6,8,10,3]))

  //Ex.RankUp Complementary DNA
  function DNAStrand(dna){
    let arr = []
    let str = '';
    for(let i = 0;i<dna.length;i++){
      arr[i] = dna.charAt([i])
      if(arr[i] == 'A'){
        arr[i] = 'T'
      }else if(arr[i] == 'T'){
        arr[i] = 'A'
      }else if(arr[i] == 'C'){
        arr[i] = 'G'
      }else if(arr[i] == 'G'){
        arr[i] = 'C'
      }str += arr[i] 
    }return str
  }
  console.log(DNAStrand(`ATTCG`))
  console.log("\n========================\n");