// function nextSmaller(n) {
//     let arr =[];
//     let tmp;
//     let count = n.length;
//     n = n.toString();
//     for(let i = 0;i<n.length;i++){
//         arr[i] = n.charAt([i])
//         if(arr[n.length-1]>arr[n.length]){
//             [arr[n.length],arr[n.length-1]]=[arr[n.length-1],arr[n.length]]
//         }
        
//     }
    
//     return arr
//   }
//   console.log(nextSmaller(531))
// // let y = [];
// // let x = "3556"
// // for (i=0; i<x.length; i++)
// // {
// //     y[i] = x.charAt([i]);
// // }
// // console.log(y)
function validatePIN (pin) {
    let arr = [];
    let str = '';
    let check;
    for(let i = 0;i<pin.length;i++){
      arr[i] = pin.charAt([i])
      if(arr.length == 4 || arr.length == 6){
        if(arr[i]%1== 0){
          check = true
        }else{
          check = false
        }
      }else{
        check = false
      }
    }return check
  }console.log(validatePIN('1234'))

       
