document.addEventListener("DOMContentLoaded", function(){

   const tabItem = document.querySelectorAll(".tab__item");
   const tabContent = document.querySelectorAll(".tab__block");


   tabItem.forEach((tab, index) => {
      tab.addEventListener('click', function(){
         tabContent.forEach(content => {
            content.classList.remove('active');
         })
         tabItem.forEach(tab => {
            tab.classList.remove('active');
         })
         tabContent[index].classList.add('active');
         tabItem[index].classList.add('active');


      })
   })

})