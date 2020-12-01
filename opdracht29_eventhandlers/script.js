//const btn = document.getElementById('mybutton');
const btn = document.querySelector('#mybutton');
// //btn.addEventListener('click', function(){
//     alert('button clicked');
// })
btn.onclick = () => {
    alert('button clicked');  
}
const btn2 = document.getElementById('mysecondbutton');
//const body = document.querySelector('.blue-background');
const body = document.getElementsByTagName('body');
const changeColor = function(){
    body[0].classList.add('red-background');
}
const toggleColor = function(){
    body[0].classList.toggle('red-background');
}
// btn2.addEventListener('click', function(){
//     body[0].classList.add('red-background');
// })
//btn2.addEventListener('click',changeColor);
btn2.addEventListener('click',toggleColor);
