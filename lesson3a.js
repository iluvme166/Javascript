// for loop
let number;

//for(number=1;number<=20;number+=1){
  //  console.log('number is',number);
//}
//print into the console the numbers in reverse order
for(number=30;number>=0;number--){
    if(number==25){
        continue
    }
    console.log('number is',number);
}
// name printing1
let username={
    one:'J',
    two:'O',
    three:'S',
    four:'H'
}
console.log(username.one);
console.log(username.one,username.two);
console.log(username.one,username.two,username.three);
console.log(username.one,username.two,username.three,username.four);

// name printing2
let name1='J';
let name2='O';
let name3='S';
let name4='H';

console.log(name1);
console.log(name1+name2);
console.log(name1+name2+name3);
console.log(name1+name2+name3+name4);
