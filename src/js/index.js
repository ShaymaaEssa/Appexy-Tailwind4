const toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener('click', function(){
    const htmlElement = document.querySelector("html");
    htmlElement.classList.toggle('dark');
    
    })