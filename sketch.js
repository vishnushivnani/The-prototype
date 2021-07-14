const sign_in_btn = document.querySelector('#sign-in-button');
const sign_up_btn = document.querySelector('#sign-up-button');
const container = document.querySelector('.container');
const log_in_btn = document.querySelector('#log-in-button');
const signUp_btn = document.querySelector('#signUp-button')
const auth = firebase.auth();

sign_up_btn.addEventListener('click',()=>{
container.classList.add('sign-up-mode');
})
sign_in_btn.addEventListener('click',()=>{
    container.classList.remove('sign-up-mode');
})
log_in_btn.addEventListener('click',()=>{
    Login();
})
signUp_btn.addEventListener('click',()=>{
    SignUp()
})
function Login(){
    var email = document.getElementById("Email");
    var password = document.getElementById("Password");
  
    const promise = auth.signInWithEmailAndPassword(email.value,password.value)
    promise.catch(e=>alert(e.message));
    
    if(password.value==="vishnu939"&&email.value==="vishnushivnani939"){
    alert("Congratulations"+Username.value+"You Just Signed In")}
}
function SignUp(){
    var email = document.getElementById("Email");
    var password = document.getElementById("Password");
    var Username = document.getElementById("Username")
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value)
    promise.catch(e=>alert(e.message));
    alert("Congratulations"+Username.value+"You Just Signed In")
}
function SignOut(){
    auth.signOut();
}
auth.onAuthStateChanged(function(user){
    if(user){
    
     var email = user.email
     alert(" Active User "+email)
      
    setup()
    }else{
        alert("No Active User")

    }
})
function setup(){
createCanvas(500,500)
var img = createButton("50,250")
img.position(250,250)
}
function draw(){
    background(0);

    drawSprites();
}