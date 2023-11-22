//declare varibales

let b = document.querySelector('[data-b]')
let h = document.querySelector('[data-h]')
let answer = document.querySelector('[data-answer]')
let btn1= document.querySelector('[data-btn1]');
let btn2= document.querySelector('[data-btn2]');

//creating function 



function convert(b,h) {
    let sum = (parseFloat((b/2)*h))
    answer.value = parseFloat(sum.toFixed(2))
}

btn1.addEventListener('click', function(){
    let b = document.querySelector('[data-b]').value
    let h = document.querySelector('[data-h]').value
    convert(b,h) 
})



btn2.addEventListener('click', function(){
    answer.value = '';
    b.value = '' ; 
    h.value = '';  
  
})
