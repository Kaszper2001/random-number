const obj = {

liczba: document.querySelector(".liczba"),
 button: document.querySelector(".button"),
 wynik: document.querySelector(".wynik"),


init:function (){
    

this.button.addEventListener("click", function(){

 this.wynik.innerText = (Math.floor(Math.random() * this.liczba.value))

}.bind(this))



}}
obj.init()
