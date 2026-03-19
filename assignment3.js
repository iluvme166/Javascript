// task1
//odd numbers
let num;
for(num=1;num<20;num+=2){
    //console.log(num);
}
// task2
//count from 10 to 1
let number;
for(number=10;number>0;number-=1){
  //  console.log(number);
}
// task 3
//find largest number in the array:(10,20,4,45,99,1)
let list=[10,20,4,45,99,1];
// variable to store largest number on the array 
//let largest_number=list[0];
//for(let num=0;num<list.length;num+=1){
  //  if(list[num]>largest_number){
    //    largest_number=list[num];
    //}
//}
//console.log('Largest number is',largest_number);
let largest_number=list[0];
for(let numb=0;numb<list.length;numb++){
    if (list[num]>largest_number){
        largest_number=list[num];
    }
    console.log('Largest number is',largest_number);

}

// task4
//write a for loop that prints the multiplacation table of 5
let num1=1
let num2=5
 
for(num1;num1<6;num1++){
    let num3=num1*num2
    console.log(num1,'*',num2,'=',num3);
}