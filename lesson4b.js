//anonymous functions
let greet = function(){
    console.log('Welcome home my friend');
}
let addition=function(num1,num2){
    console.log(num1+num2);
}
// invoke/call
greet();
addition(56,44);

// iife self executing functions
(function(){
    console.log('This Function runs immediately');
})();

(function(name){
    console.log('My name is',name);
})('Arsenal');