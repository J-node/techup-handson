var age=20;
age=65;
console.log(age);

var username="preshant";
var password="techup";

var isMale=false;
var isLoggedIn=false;

var blog_posts=["Today was a good day", "The sky is blue", "It's raining heavily now"]


console.log(username);
console.log(password);
console.log(isMale);
console.log(isLoggedIn);
console.log(blog_posts);

if (isMale == true){
    console.log ("You are male.");
} else{
    console.log("You are female.")
}

while (age <70){
    console.log ("your age is " + age +".");
    age = age + 1;
}


function sayHello(){
    alert ("Hello everyone");
}

function showAge(){
    var user_input=document.getElementById("user-input") .value;
    document.getElementById("header-age").textContent=user_input;
}