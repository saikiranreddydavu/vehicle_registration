
export default function Number(no,word){
   var num = parseInt(no)
    if(num<9999){
      num = num+1;
    }
    else{
      var word1 = prompt("Enter the next Serial element");
      word = word1;
      num = 1;
    }
    if (num < 10){
      return(["000"+num,word]);
    }
    if(num < 100){
      return(["00"+num,word]);
    }
    if(num < 1000){
      return(["0"+num,word]);
    }
    return([num,word]);
}
