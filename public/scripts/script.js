document.addEventListener(
    "DOMContentLoaded",
    function () {
      
    
    
        let mainModuleStage = document.querySelectorAll(".main-module__stage");
        let nextBtn = document.querySelectorAll(".next-btn");
        let paginationItem = document.querySelectorAll(".pagination-block__item");
    
        for (let i = 0; i < nextBtn.length; i++) {
          nextBtn[i].onclick = function () {
          
            mainModuleStage[i].classList = "main-module__stage st-complete";
            mainModuleStage[i + 1].classList = "main-module__stage st-active";
            paginationItem[i].classList = "pagination-block__item pag-compl";
            paginationItem[i + 1].classList = "pagination-block__item pag-active";
          };
        }
     
    
           
        
    
        
    },
    false
  );

 