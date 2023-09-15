const cir = document.querySelector(".circle");
const para = document.querySelector('p');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

btn1.addEventListener('click',()=>{
   cir.style.backgroundColor ='yellow';
   para.innerHTML='Whooo light ON';

});
btn2.addEventListener('click',()=>{
    cir.style.backgroundColor ='white';
    para.innerHTML='OHHH you just OF the light';
 });
 