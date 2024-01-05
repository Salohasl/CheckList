const textMan=document.querySelector('.man');
   const Btn=document.querySelector('button');
   const num=document.querySelector('.num');
   const arrMan=['Вок', 'Плов', 'Гречка', 'Макароны', 'Жаркое', 'Жаренная картошка', 'Пюре', 'Креативчик(что-то новое)'];
   
   Btn.addEventListener('click', ()=>{
     let randomArr=arrMan[Math.floor(Math.random()*arrMan.length)];
     let i = 4;
   let timer=setInterval(function (){
       --i;
       num.textContent=i;
       if(i == 0){
           clearInterval(timer);
           num.textContent='Выбрано!'
           textMan.textContent=randomArr;
       }
     },1000);
   });