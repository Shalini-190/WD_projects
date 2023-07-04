function greet(name){
    console.log("Hello,"+name+"!");
}
function sayHelloWithDelay(callback){
    setTimeout(function(){
        callback("Shalu");
    },2000);
}
sayHelloWithDelay(greet);
