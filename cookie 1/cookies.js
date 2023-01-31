//local storage
var input=document.querySelector('.user');
var btn=document.querySelector('.valider');
var nom=""
var setItem=""
//event
btn.addEventListener('click',e=>{
    nom=input.value;
    setItem=localStorage.setItem('User',nom)
input.style.transition='3s'
input.style.border="3px solid lightgreen"
console.log(Name)
});
//value
input.value=localStorage.getItem('User')